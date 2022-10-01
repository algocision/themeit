import { createTheme } from '@mui/material';
import { Theme } from '@mui/material';
import { CSSProperties } from 'react';
import { colors } from './colors';

// export const darkTheme: Theme = {
//   ...createTheme({
//     palette: {
//       color: { ...colors.dark },
//       primary: {
//         main: colors.dark.selected,
//       },
//       secondary: {
//         main: colors.dark.secondary,
//       },
//       error: {
//         main: colors.dark.error,
//       },
//     },
//   }),
// };

// export const lightTheme: Theme = {
//   ...createTheme({
//     palette: {
//       color: {
//         ...colors.light,
//       },
//       primary: {
//         main: colors.light.selected,
//       },
//       secondary: {
//         main: colors.light.secondary,
//       },
//       error: {
//         main: colors.light.error,
//       },
//     },
//   }),
// };

export interface CustomProps {
  style?: CSSProperties;
  className?: string;
}

declare module '@mui/material' {
  interface Palette {
    color: {
      // Primary color shades
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
      p5?: string;
      // Secondary color shades
      s1: string;
      s2?: string;
      s3?: string;
      s4?: string;
      s5?: string;
      // Accent color shades
      a1: string;
      a2?: string;
      a3?: string;
      a4?: string;
      a5?: string;
      // Text on primary color shades
      tp1: string;
      tp2?: string;
      tp3?: string;
      tp4?: string;
      tp5?: string;
      // Text on secondary color shades
      ts1: string;
      ts2?: string;
      ts3?: string;
      ts4?: string;
      ts5?: string;
      // Text on accent color shades
      ta1: string;
      ta2?: string;
      ta3?: string;
      ta4?: string;
      ta5?: string;
      // Semantic colors
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    darkColor: {
      // Primary color shades
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
      p5?: string;
      // Secondary color shades
      s1: string;
      s2?: string;
      s3?: string;
      s4?: string;
      s5?: string;
      // Accent color shades
      a1: string;
      a2?: string;
      a3?: string;
      a4?: string;
      a5?: string;
      // Text on primary color shades
      tp1: string;
      tp2?: string;
      tp3?: string;
      tp4?: string;
      tp5?: string;
      // Text on secondary color shades
      ts1: string;
      ts2?: string;
      ts3?: string;
      ts4?: string;
      ts5?: string;
      // Text on accent color shades
      ta1: string;
      ta2?: string;
      ta3?: string;
      ta4?: string;
      ta5?: string;
      // Semantic colors
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    lightColor: {
      // Primary color shades
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
      p5?: string;
      // Secondary color shades
      s1: string;
      s2?: string;
      s3?: string;
      s4?: string;
      s5?: string;
      // Accent color shades
      a1: string;
      a2?: string;
      a3?: string;
      a4?: string;
      a5?: string;
      // Text on primary color shades
      tp1: string;
      tp2?: string;
      tp3?: string;
      tp4?: string;
      tp5?: string;
      // Text on secondary color shades
      ts1: string;
      ts2?: string;
      ts3?: string;
      ts4?: string;
      ts5?: string;
      // Text on accent color shades
      ta1: string;
      ta2?: string;
      ta3?: string;
      ta4?: string;
      ta5?: string;
      // Semantic colors
      error: string;
      warning: string;
      success: string;
      info: string;
    };
  }
  interface PaletteOptions {
    color: {
      // Primary color shades
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
      p5?: string;
      // Secondary color shades
      s1: string;
      s2?: string;
      s3?: string;
      s4?: string;
      s5?: string;
      // Accent color shades
      a1: string;
      a2?: string;
      a3?: string;
      a4?: string;
      a5?: string;
      // Text on primary color shades
      tp1: string;
      tp2?: string;
      tp3?: string;
      tp4?: string;
      tp5?: string;
      // Text on secondary color shades
      ts1: string;
      ts2?: string;
      ts3?: string;
      ts4?: string;
      ts5?: string;
      // Text on accent color shades
      ta1: string;
      ta2?: string;
      ta3?: string;
      ta4?: string;
      ta5?: string;
      // Semantic colors
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    darkColor: {
      // Primary color shades
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
      p5?: string;
      // Secondary color shades
      s1: string;
      s2?: string;
      s3?: string;
      s4?: string;
      s5?: string;
      // Accent color shades
      a1: string;
      a2?: string;
      a3?: string;
      a4?: string;
      a5?: string;
      // Text on primary color shades
      tp1: string;
      tp2?: string;
      tp3?: string;
      tp4?: string;
      tp5?: string;
      // Text on secondary color shades
      ts1: string;
      ts2?: string;
      ts3?: string;
      ts4?: string;
      ts5?: string;
      // Text on accent color shades
      ta1: string;
      ta2?: string;
      ta3?: string;
      ta4?: string;
      ta5?: string;
      // Semantic colors
      error: string;
      warning: string;
      success: string;
      info: string;
    };
    lightColor: {
      // Primary color shades
      p1: string;
      p2?: string;
      p3?: string;
      p4?: string;
      p5?: string;
      // Secondary color shades
      s1: string;
      s2?: string;
      s3?: string;
      s4?: string;
      s5?: string;
      // Accent color shades
      a1: string;
      a2?: string;
      a3?: string;
      a4?: string;
      a5?: string;
      // Text on primary color shades
      tp1: string;
      tp2?: string;
      tp3?: string;
      tp4?: string;
      tp5?: string;
      // Text on secondary color shades
      ts1: string;
      ts2?: string;
      ts3?: string;
      ts4?: string;
      ts5?: string;
      // Text on accent color shades
      ta1: string;
      ta2?: string;
      ta3?: string;
      ta4?: string;
      ta5?: string;
      // Semantic colors
      error: string;
      warning: string;
      success: string;
      info: string;
    };
  }
}
