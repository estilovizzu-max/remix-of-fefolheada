#!/usr/bin/env node
/**
 * Valida meta tags Open Graph e Twitter Card no index.html.
 * Sai com código 1 se algo estiver ausente, vazio ou apontando para placeholder.
 * Uso: node scripts/validate-meta-tags.mjs [caminho/para/index.html]
 */
import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const file = resolve(process.argv[2] ?? "index.html");
if (!existsSync(file)) {
  console.error(`✗ Arquivo não encontrado: ${file}`);
  process.exit(1);
}
const html = readFileSync(file, "utf8");

const REQUIRED = {
  og: [
    "og:title",
    "og:description",
    "og:type",
    "og:url",
    "og:site_name",
    "og:locale",
  ],
  twitter: ["twitter:card", "twitter:title", "twitter:description"],
  name: ["description"],
};

const FORBIDDEN_VALUES = [
  /lovable\s*app/i,
  /lovable generated project/i,
  /opengraph-image-p98pqg/i,
  /@lovable_dev/i,
];

const errors = [];
const warnings = [];

function getMeta(attr, key) {
  // Aceita property="og:x" ou name="twitter:x" com aspas simples/duplas e ordem livre.
  const re = new RegExp(
    `<meta[^>]*\\b${attr}\\s*=\\s*["']${key.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&",
    )}["'][^>]*>`,
    "i",
  );
  const tag = html.match(re)?.[0];
  if (!tag) return null;
  const content = tag.match(/\bcontent\s*=\s*["']([^"']*)["']/i)?.[1] ?? "";
  return content.trim();
}

function check(attr, key) {
  const v = getMeta(attr, key);
  if (v === null) {
    errors.push(`Ausente: <meta ${attr}="${key}">`);
    return;
  }
  if (!v) {
    errors.push(`Vazio: <meta ${attr}="${key}">`);
    return;
  }
  for (const bad of FORBIDDEN_VALUES) {
    if (bad.test(v)) {
      errors.push(`Placeholder proibido em ${key}: "${v}"`);
      return;
    }
  }
}

REQUIRED.og.forEach((k) => check("property", k));
REQUIRED.twitter.forEach((k) => check("name", k));
REQUIRED.name.forEach((k) => check("name", k));

// <title> real
const title = html.match(/<title>([^<]*)<\/title>/i)?.[1]?.trim() ?? "";
if (!title) errors.push("Ausente: <title>");
else if (FORBIDDEN_VALUES.some((r) => r.test(title)))
  errors.push(`<title> com placeholder: "${title}"`);

// og:url e canonical devem bater (se houver canonical)
const canonical = html
  .match(/<link[^>]*\brel=["']canonical["'][^>]*>/i)?.[0]
  ?.match(/\bhref=["']([^"']+)["']/i)?.[1];
const ogUrl = getMeta("property", "og:url");
if (canonical && ogUrl && canonical !== ogUrl) {
  warnings.push(`canonical (${canonical}) != og:url (${ogUrl})`);
}

// og:image opcional; se presente, precisa ser https absoluto
const ogImage = getMeta("property", "og:image");
if (ogImage && !/^https:\/\//i.test(ogImage)) {
  errors.push(`og:image deve ser URL https absoluta: "${ogImage}"`);
}
const twImage = getMeta("name", "twitter:image");
if (twImage && !/^https:\/\//i.test(twImage)) {
  errors.push(`twitter:image deve ser URL https absoluta: "${twImage}"`);
}

console.log(`Validando meta tags em: ${file}`);
if (warnings.length) {
  console.log("\nAvisos:");
  warnings.forEach((w) => console.log(`  ! ${w}`));
}
if (errors.length) {
  console.log("\nErros:");
  errors.forEach((e) => console.log(`  ✗ ${e}`));
  console.log(`\nFalhou com ${errors.length} erro(s).`);
  process.exit(1);
}
console.log("\n✓ Todas as meta tags obrigatórias estão presentes e válidas.");
