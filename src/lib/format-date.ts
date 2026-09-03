/** American long date, e.g. "January 30, 2027" */
const AMERICAN_DATE: Intl.DateTimeFormatOptions = {
  month: "long",
  day: "numeric",
  year: "numeric",
};

/**
 * Format a date value as Month D, YYYY (en-US).
 * Returns "" for empty/invalid input when `fallback` is omitted.
 */
export function formatDate(
  value: unknown,
  fallback = ""
): string {
  if (value == null || value === "") return fallback;
  try {
    const dt = value instanceof Date ? value : new Date(String(value));
    if (Number.isNaN(dt.getTime())) {
      return typeof value === "string" ? value : fallback;
    }
    return dt.toLocaleDateString("en-US", AMERICAN_DATE);
  } catch {
    return typeof value === "string" ? value : fallback;
  }
}

/** Range like "June 15, 2025 – August 22, 2025" */
export function formatDateRange(
  start: unknown,
  end?: unknown
): string {
  const s = formatDate(start);
  const e = formatDate(end);
  if (s && e) return `${s} – ${e}`;
  return s || e || "";
}
