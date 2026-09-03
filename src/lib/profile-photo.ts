/** Initials for avatar fallbacks when a member has no profile photo. */
export function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

/** True when we have a real photo URL (not empty / not the old stock placeholder). */
export function hasProfilePhoto(image: string | null | undefined): boolean {
  if (!image) return false;
  if (image === "/to-vote-for.jpg") return false;
  return true;
}
