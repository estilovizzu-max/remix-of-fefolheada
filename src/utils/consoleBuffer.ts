export interface ConsoleLogEntry {
  level: "log" | "info" | "warn" | "error" | "debug";
  message: string;
  time: string;
}

const MAX_LOGS = 200;
const buffer: ConsoleLogEntry[] = [];
let patched = false;

function stringify(a: unknown): string {
  if (a instanceof Error) return `${a.name}: ${a.message}\n${a.stack ?? ""}`;
  if (typeof a === "object" && a !== null) {
    try {
      return JSON.stringify(a, null, 2);
    } catch {
      return String(a);
    }
  }
  return String(a);
}

function record(level: ConsoleLogEntry["level"], args: unknown[]) {
  try {
    buffer.push({
      level,
      message: args.map(stringify).join(" "),
      time: new Date().toISOString(),
    });
    if (buffer.length > MAX_LOGS) buffer.shift();
  } catch {
    /* ignore */
  }
}

export function initConsoleBuffer() {
  if (patched || typeof window === "undefined") return;
  patched = true;
  (["log", "info", "warn", "error", "debug"] as const).forEach((level) => {
    const original = console[level].bind(console);
    console[level] = (...args: unknown[]) => {
      record(level, args);
      original(...args);
    };
  });
  window.addEventListener("error", (e) => {
    record("error", [`window.error: ${e.message} @ ${e.filename}:${e.lineno}:${e.colno}`]);
  });
  window.addEventListener("unhandledrejection", (e) => {
    record("error", [`unhandledrejection: ${String(e.reason)}`]);
  });
}

export function getConsoleBuffer(): ConsoleLogEntry[] {
  return [...buffer];
}

export function clearConsoleBuffer() {
  buffer.length = 0;
}
