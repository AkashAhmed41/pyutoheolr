export function getReleaseYear(dateString: string): string {
  if (!dateString) {
    return "";
  }

  return dateString.split("-")[0];
}

export function getFormattedRating(value: number): string {
  return value.toFixed(1);
}
