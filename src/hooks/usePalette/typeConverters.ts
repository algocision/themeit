import { FixedArray } from './types';

export const hexToRgb = (c: string): FixedArray<number, 3> => {
  let offset = 0;
  if (c[0] === '#') {
    offset = 1;
  }
  return [
    parseInt(`0x${c.slice(0 + offset, 2 + offset)}`),
    parseInt(`0x${c.slice(2 + offset, 4 + offset)}`),
    parseInt(`0x${c.slice(4 + offset, 6 + offset)}`),
  ];
};

export const decimalToHexString = (num: number): string => {
  const hex = num.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
};
