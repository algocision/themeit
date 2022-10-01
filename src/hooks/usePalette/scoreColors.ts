import { hexToRgb } from './typeConverters';
import { FixedArray } from './types';

/** Find contrast between two input values
 *  @param rbg1 [0-255, 0-255, 0-255]
 *  @param rbg2 [0-255, 0-255, 0-255]
 */
export const getContrast = (
  rgb1: FixedArray<number, 3> | string,
  rgb2: FixedArray<number, 3> | string
): number => {
  const luminance = (rgb: FixedArray<number, 3>) => {
    const a = rgb.map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  };

  let lum1: number;
  let lum2: number;
  if (
    typeof rgb1[0] === 'number' &&
    typeof rgb1[1] === 'number' &&
    typeof rgb1[2] === 'number'
  ) {
    lum1 = luminance([rgb1[0], rgb1[1], rgb1[2]]);
  } else {
    lum1 = luminance(hexToRgb(rgb1 as string));
  }

  if (
    typeof rgb2[0] === 'number' &&
    typeof rgb2[1] === 'number' &&
    typeof rgb2[2] === 'number'
  ) {
    lum2 = luminance([rgb2[0], rgb2[1], rgb2[2]]);
  } else {
    lum2 = luminance(hexToRgb(rgb2 as string));
  }

  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};
