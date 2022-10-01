import { getContrast } from '../scoreColors';
import { hexToRgb } from '../typeConverters';

/** Find whether white or black has a higher contrast with input color
 *  @param c '#xxxxxx' | 'xxxxxx' format string (hex code without/ without hashtag)
 *  @returns '#000000' | '#ffffff'
 */
export const getWhiteOrBlack = (c: string): string => {
  const white = getContrast([255, 255, 255], hexToRgb(c));
  const black = getContrast([0, 0, 0], hexToRgb(c));
  if (white > black) {
    return '#ffffff';
  } else {
    return '#000000';
  }
};
