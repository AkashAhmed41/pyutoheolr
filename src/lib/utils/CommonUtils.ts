import en from "@/lib/localization/en.json";
import { isNullOrUndefined } from "@/lib/utils/ObjectUtils";

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
