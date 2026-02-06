import en from "@/lib/localization/en.json";

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
