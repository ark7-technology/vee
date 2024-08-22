/**
 * Convert to the upper case.
 */
export function upper(x?: object) {
  return x?.toString().toUpperCase();
}

/**
 * Convert to the lower case.
 */
export function lower(x?: object) {
  return x?.toString().toLowerCase();
}

/**
 * Trim the string.
 */
export function trim(x?: object) {
  return x?.toString().trim();
}

/**
 * Trim the start of the string.
 */
export function trimStart(x?: object) {
  return x?.toString().trimStart();
}
export const trimLeft = trimStart;

/**
 * Trim the end of the string.
 */
export function trimEnd(x?: object) {
  return x?.toString().trimEnd();
}
export const trimRight = trimEnd;
