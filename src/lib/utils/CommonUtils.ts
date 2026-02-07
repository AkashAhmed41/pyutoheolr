import en from "@/lib/localization/en.json";
import { isNullOrUndefined } from "@/lib/utils/ObjectUtils";
import { MINUTES_IN_HOUR } from "../constants/ApplicationConstants";

export function getLocalizedText(
  section: keyof typeof en,
  key: string,
): string {
  const sectionData = en[section] as Record<string, string>;
  return sectionData?.[key] || key;
}

export function getReleaseYear(dateString: string): string {
  if (!dateString) {
    return "";
  }

  return dateString.split("-")[0];
}

export function getFormattedRating(value: number): string {
  return value.toFixed(1);
}

export function getFormattedRuntime(minutes: number): string {
  if (!minutes) {
    return "0h 0m";
  }

  const h = Math.floor(minutes / MINUTES_IN_HOUR);
  const m = minutes % MINUTES_IN_HOUR;
  return `${h}h ${m}m`;
}

export function getFormattedDate(dateString: string): string {
  if (!dateString) {
    return "N/A";
  }

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateQueryString(
  searchParams: string | URLSearchParams,
  options: Record<string, string | number>,
): string {
  const params = new URLSearchParams(searchParams.toString());
  Object.entries(options).forEach(([key, value]) => {
    if (isNullOrUndefined(value)) return;
    params.set(key, String(value));
  });

  return `?${params.toString()}`;
}
