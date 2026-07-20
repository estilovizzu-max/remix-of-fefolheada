#!/usr/bin/env node
/**
 * Valida <meta property="og:image"> antes do deploy.
 * Regras:
 *   - Tag presente e não vazia.
 *   - URL https:// absoluta.
 *   - Arquivo acessível (HTTP 200).
 *   - Content-Type image/jpeg ou image/png.
 *   - Dimensões exatas: 1200x630.
 *
 * Uso: node scripts/validate-og-image.mjs [caminho/para/index.html]
 * Env:
 *   OG_IMAGE_URL_OVERRIDE  força uma URL (útil para preview)
 *   OG_IMAGE_ALLOW_MISSING=1  não falha se a tag não existir (dev)
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { Buffer } from "node:buffer";

const REQUIRED_W = 1200;
const REQUIRED_H = 630;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png"]);

function fail(msg) {
  console.error(`✗ ${msg}`);
  process.exit(1);
}
function ok(msg) {
  console.log(`✓ ${msg}`);
}

const file = resolve(process.argv[2] ?? "index.html");
if (!existsSync(file)) fail(`Arquivo não encontrado: ${file}`);
const html = readFileSync(file, "utf8");

function getMeta(prop) {
  const re = new RegExp(
    `<meta[^>]*\\bproperty\\s*=\\s*["']${prop}["'][^>]*>`,
    "i",
  );
  const tag = html.match(re)?.[0];
  if (!tag) return null;
  return tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1]?.trim() ?? "";
}

let url = process.env.OG_IMAGE_URL_OVERRIDE || getMeta("og:image");
if (!url) {
  if (process.env.OG_IMAGE_ALLOW_MISSING === "1") {
    console.log("! og:image ausente — ignorado (OG_IMAGE_ALLOW_MISSING=1).");
    process.exit(0);
  }
  fail('<meta property="og:image"> ausente ou vazia.');
}
if (!/^https:\/\//i.test(url)) fail(`og:image deve ser URL https absoluta: "${url}"`);
ok(`og:image: ${url}`);

// Baixa
const res = await fetch(url, { redirect: "follow" });
if (!res.ok) fail(`Falha ao baixar og:image: HTTP ${res.status}`);
const ct = (res.headers.get("content-type") || "").split(";")[0].trim().toLowerCase();
if (!ALLOWED_TYPES.has(ct)) fail(`Content-Type inválido: "${ct}" (esperado image/jpeg ou image/png)`);
ok(`Content-Type: ${ct}`);

const buf = Buffer.from(await res.arrayBuffer());
if (buf.length < 24) fail("Arquivo muito pequeno para ser imagem válida.");

let width = 0, height = 0, kind = "";

// PNG: bytes 16-23 = IHDR width/height big-endian
if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
  kind = "png";
  width = buf.readUInt32BE(16);
  height = buf.readUInt32BE(20);
} else if (buf[0] === 0xff && buf[1] === 0xd8) {
  // JPEG: percorre segmentos até SOF0-SOF3/SOF5-SOF7/SOF9-SOF11/SOF13-SOF15
  kind = "jpeg";
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) fail("JPEG malformado (marcador inesperado).");
    // pula 0xFF de padding
    while (buf[i] === 0xff) i++;
    const marker = buf[i]; i++;
    // SOFn (exceto DHT=0xC4, DAC=0xCC, DNL=0xDC ... simplificação: SOF = 0xC0..0xCF menos 0xC4/0xC8/0xCC)
    const isSOF =
      marker >= 0xc0 && marker <= 0xcf &&
      marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc;
    const segLen = buf.readUInt16BE(i);
    if (isSOF) {
      height = buf.readUInt16BE(i + 3);
      width = buf.readUInt16BE(i + 5);
      break;
    }
    i += segLen;
  }
} else {
  fail("Formato binário não reconhecido (esperado PNG ou JPEG).");
}

if (!width || !height) fail("Não foi possível extrair dimensões da imagem.");
ok(`Formato: ${kind} — ${width}x${height}`);

if (width !== REQUIRED_W || height !== REQUIRED_H) {
  fail(`Dimensões inválidas: ${width}x${height} (esperado ${REQUIRED_W}x${REQUIRED_H})`);
}

console.log(`\n✓ og:image válida (${kind}, ${width}x${height}, ${(buf.length/1024).toFixed(1)} KB).`);
