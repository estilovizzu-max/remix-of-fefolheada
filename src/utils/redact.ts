// Mascaramento de dados sensíveis para exportação/cópia de diagnóstico.
// Ordem importa: padrões mais específicos primeiro.

export type RedactionLabel =
  | "AUTHORIZATION"
  | "COOKIE"
  | "SUPABASE_SESSION"
  | "JWT"
  | "STRIPE_KEY"
  | "GITHUB_TOKEN"
  | "SLACK_TOKEN"
  | "AWS_KEY"
  | "EMAIL"
  | "IP"
  | "QUERY_SECRET";

interface Rule {
  label: RedactionLabel;
  re: RegExp;
  to: string;
}

const RULES: Rule[] = [
  { label: "AUTHORIZATION", re: /(authorization\s*[:=]\s*)(bearer\s+)?[A-Za-z0-9._\-+/=]{12,}/gi, to: "$1$2[REDACTED_AUTHORIZATION]" },
  { label: "COOKIE", re: /(cookie\s*[:=]\s*)[^\n\r"']+/gi, to: "$1[REDACTED_COOKIE]" },
  { label: "SUPABASE_SESSION", re: /("?sb-[a-z0-9-]+-auth-token"?\s*[:=]\s*)("?)[^"\n,}]+(\2)/gi, to: '$1$2[REDACTED_SUPABASE_SESSION]$3' },
  { label: "JWT", re: /\beyJ[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\.[A-Za-z0-9_-]{5,}\b/g, to: "[REDACTED_JWT]" },
  { label: "STRIPE_KEY", re: /\b(?:sk|pk|rk)_(?:live|test)_[A-Za-z0-9]{10,}\b/g, to: "[REDACTED_STRIPE_KEY]" },
  { label: "GITHUB_TOKEN", re: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, to: "[REDACTED_GITHUB_TOKEN]" },
  { label: "SLACK_TOKEN", re: /\bxox[baprs]-[A-Za-z0-9-]{10,}\b/g, to: "[REDACTED_SLACK_TOKEN]" },
  { label: "AWS_KEY", re: /\bAKIA[0-9A-Z]{16}\b/g, to: "[REDACTED_AWS_KEY]" },
  { label: "EMAIL", re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g, to: "[REDACTED_EMAIL]" },
  { label: "IP", re: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g, to: "[REDACTED_IP]" },
  {
    label: "QUERY_SECRET",
    re: /([?&](?:access_token|token|api[_-]?key|apikey|key|secret|session|password|passwd|pwd)=)[^&#\s"']+/gi,
    to: "$1[REDACTED]",
  },
];

export type RedactionCounts = Partial<Record<RedactionLabel, number>>;

export function redact(input: string): string {
  return redactWithStats(input).text;
}

export function redactWithStats(input: string): { text: string; counts: RedactionCounts } {
  const counts: RedactionCounts = {};
  if (!input) return { text: input ?? "", counts };
  let out = input;
  for (const rule of RULES) {
    const re = new RegExp(rule.re.source, rule.re.flags);
    let n = 0;
    out = out.replace(re, (...args) => {
      n++;
      // Reconstruir substituição respeitando grupos ($1, $2...)
      const groups = args.slice(1, -2);
      return rule.to.replace(/\$(\d+)/g, (_, g) => groups[Number(g) - 1] ?? "");
    });
    if (n > 0) counts[rule.label] = (counts[rule.label] ?? 0) + n;
  }
  return { text: out, counts };
}

export function mergeCounts(a: RedactionCounts, b: RedactionCounts): RedactionCounts {
  const out: RedactionCounts = { ...a };
  for (const k of Object.keys(b) as RedactionLabel[]) {
    out[k] = (out[k] ?? 0) + (b[k] ?? 0);
  }
  return out;
}

export const LABEL_PT: Record<RedactionLabel, string> = {
  AUTHORIZATION: "Authorization / Bearer",
  COOKIE: "Cookies",
  SUPABASE_SESSION: "Sessão Supabase",
  JWT: "JWT",
  STRIPE_KEY: "Chaves Stripe",
  GITHUB_TOKEN: "Tokens GitHub",
  SLACK_TOKEN: "Tokens Slack",
  AWS_KEY: "Chaves AWS",
  EMAIL: "E-mails",
  IP: "Endereços IP",
  QUERY_SECRET: "Segredos em URL",
};
