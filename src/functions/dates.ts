/**
 * Get the UTC full year for a date object.
 */
export function year(x?: any) {
  return new Date(x).getUTCFullYear();
}
