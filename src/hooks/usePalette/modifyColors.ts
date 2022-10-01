import { hexToRgb, decimalToHexString } from './typeConverters';

/** Calculate tint of a color
 *  @param c 'xxxxxx' format string (hex code without hashtag)
 *  @param amt number from 0-1 (percentage)
 *  @returns '#xxxxxx' format string (hex code with hashtag)
 */
export const getTint = (c: string, amt: number): string => {
  const rgb = hexToRgb(c);
  return `#${Math.round(rgb[0] + (255 - rgb[0]) * amt)}${Math.round(
    rgb[1] + (255 - rgb[1]) * amt
  )}${Math.round(rgb[2] + (255 - rgb[2]) * amt)}`;
};

/** Calculate shade of a color
 *  @param c 'xxxxxx' format string (hex code without hashtag)
 *  @param amt number from 0-1 (percentage)
 *  @returns '#xxxxxx' format string (hex code with hashtag)
 */
export const getShade = (c: string, amt: number): string => {
  const rgb = hexToRgb(c);
  return `#${decimalToHexString(Math.round(rgb[0] * amt))}${decimalToHexString(
    Math.round(rgb[1] * amt)
  )}${decimalToHexString(Math.round(rgb[2] * amt))}`;
};

/** Get complement of input color
 *  @param c 'xxxxxx' | '#xxxxxx' format string (hex code with or without hashtag)
 *  @param amt number from 0-1 (percentage)
 *  @returns '#xxxxxx' format string (hex code with hashtag)
 */
export const getComplement = (c: string): string => {
  let offset = 0;
  if (c[0] === '#') {
    offset = 1;
  }
  const r = parseInt(`0x${c.slice(0 + offset, 2 + offset)}`);
  const g = parseInt(`0x${c.slice(2 + offset, 4 + offset)}`);
  const b = parseInt(`0x${c.slice(4 + offset, 6 + offset)}`);
  let reflectedValues = { r: 0, g: 0, b: 0 };
  if (r > 127) {
    reflectedValues['r'] = 128 - (r - 127);
  } else {
    reflectedValues['r'] = 128 + (127 - r);
  }
  if (g > 127) {
    reflectedValues['g'] = 128 - (g - 127);
  } else {
    reflectedValues['g'] = 128 + (127 - g);
  }
  if (b > 127) {
    reflectedValues['b'] = 128 - (b - 127);
  } else {
    reflectedValues['b'] = 128 + (127 - b);
  }
  return `#${decimalToHexString(reflectedValues['r'])}${decimalToHexString(
    reflectedValues['g']
  )}${decimalToHexString(reflectedValues['b'])}`;
};
