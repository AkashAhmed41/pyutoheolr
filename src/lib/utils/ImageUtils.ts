import { TMDB_CONFIG, IMAGE_SIZES } from "@/config/tmdb.config";
import { PLACEHOLDER_SVG } from "@/lib/svg/icons";

export function getPosterUrl(
  path: string | null,
  size: keyof typeof IMAGE_SIZES = "POSTER_LARGE",
): string {
  if (!path) {
    return PLACEHOLDER_SVG;
  }

  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${IMAGE_SIZES[size]}${path}`;
}

export function getBackdropUrl(
  path: string | null,
  size: keyof typeof IMAGE_SIZES = "BACKDROP_ORIGINAL",
): string {
  if (!path) {
    return PLACEHOLDER_SVG;
  }

  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${IMAGE_SIZES[size]}${path}`;
}

export function getProfileUrl(
  path: string | null,
  size: keyof typeof IMAGE_SIZES = "POSTER_MEDIUM",
): string {
  if (!path) {
    return PLACEHOLDER_SVG;
  }

  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${IMAGE_SIZES[size]}${path}`;
}
