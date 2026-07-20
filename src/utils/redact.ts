// Mascaramento de dados sensíveis para exportação/cópia de diagnóstico.
// Ordem importa: padrões mais específicos primeiro.

const RULES: Array<{ re: RegExp; to: string | ((m: string, ...g: string[]) => string) }> = [
  // Authorization: Bearer <token>
  { re: /(authorization\s*[:=]\s*)(bearer\s+)?[A-Za-z0-9._\-+/=]{12,}/gi, to: "$1$2[REDACTED_TOKEN]" },
  // Cookie header / document.cookie
  { re: /(cookie\s*[:=]\s*)[^\n\r"']+/gi, to: "$1[REDACTED_COOKIE]" },
  // Supabase auth token key (sb-<proj>-auth-token) value in JSON-ish
  { re: /("?sb-[a-z0-9-]+-auth-token"?\s*[:=]\s*)("?)[^"\n,}]+(\2)/gi, to: '$1$2[REDACTED_SUPABASE_SESSION]$3' },
  // JWT (three base64url segments separated by .)
  { re: /\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/g, to: "[REDACTED_JWT]" },
  // Chaves conhecidas: sk_/pk_/rk_/ghp_/gho_/ghs_/xox[bpsa]-
  { re: /\b(sk|pk|rk)_(live|test)_[A-Za-z0-9]{10,}\b/g, to: "[REDACTED_KEY]" },
  { re: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, to: "[REDACTED_GITHUB_TOKEN]" },
  { re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g, to: "[REDACTED_SLACK_TOKEN]" },
  // AWS access key id
  { re: /\bAKIA[0-9A-Z]{16}\b/g, to: "[REDACTED_AWS_KEY]" },
  // Emails
  { re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, to: "[REDACTED_EMAIL]" },
  // IPv4
  { re: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g, to: "[REDACTED_IP]" },
  // Query strings com token/key/secret/session/password/access_token
  {
    re: /([?&](?:access_token|token|api[_-]?key|apikey|key|secret|session|password|passwd|pwd)=)[^&#\s"']+/gi,
    to: "$1[REDACTED]",
  },
];

export function redact(input: string): string {
  if (!input) return input;
  let out = input;
  for (const rule of RULES) {
    // @ts-expect-error union callable
    out = out.replace(rule.re, rule.to);
  }
  return out;
}

export function redactValue(v: unknown): string {
  return redact(String(v ?? ""));
}
