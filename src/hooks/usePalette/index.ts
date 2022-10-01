/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Theme } from '@mui/material';
import { createTheme } from '@mui/material';
import { p3 } from './data/palettes';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import { useDispatch } from 'react-redux';
import { getComplement } from './modifyColors';
import { getWhiteOrBlack } from './util/getWhiteOrBlack';

export const usePalette = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [route, setRoute] = useState<string>();

  const [activePalette, setActivePalette] = useState<number>(0);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  const [palette, setPalette] = useState<Theme>(
    createTheme({
      palette: {
        color: {
          p1: darkMode
            ? getComplement(
                `#${p3[activePalette][(0 + offset) % p3[0].length]}`
              )
            : `#${p3[activePalette][(0 + offset) % p3[0].length]}`,
          s1: darkMode
            ? getComplement(
                `#${p3[activePalette][(1 + offset) % p3[0].length]}`
              )
            : `#${p3[activePalette][(1 + offset) % p3[0].length]}`,
          a1: darkMode
            ? getComplement(
                `#${p3[activePalette][(2 + offset) % p3[0].length]}`
              )
            : `#${p3[activePalette][(2 + offset) % p3[0].length]}`,
          tp1: darkMode
            ? getWhiteOrBlack(
                getComplement(p3[activePalette][(0 + offset) % p3[0].length])
              )
            : getWhiteOrBlack(p3[activePalette][(0 + offset) % p3[0].length]),
          ts1: darkMode
            ? getWhiteOrBlack(
                getComplement(p3[activePalette][(1 + offset) % p3[0].length])
              )
            : getWhiteOrBlack(p3[activePalette][(1 + offset) % p3[0].length]),
          ta1: darkMode
            ? getWhiteOrBlack(
                getComplement(p3[activePalette][(2 + offset) % p3[0].length])
              )
            : getWhiteOrBlack(p3[activePalette][(2 + offset) % p3[0].length]),
          error: '#f00',
          warning: '#ffa500',
          success: '#0f0',
          info: '#00f',
        },
        darkColor: {
          p1: getComplement(
            `#${p3[activePalette][(0 + offset) % p3[0].length]}`
          ),
          s1: getComplement(
            `#${p3[activePalette][(1 + offset) % p3[0].length]}`
          ),
          a1: getComplement(
            `#${p3[activePalette][(2 + offset) % p3[0].length]}`
          ),
          tp1: getWhiteOrBlack(
            getComplement(p3[activePalette][(0 + offset) % p3[0].length])
          ),
          ts1: getWhiteOrBlack(
            getComplement(p3[activePalette][(1 + offset) % p3[0].length])
          ),
          ta1: getWhiteOrBlack(
            getComplement(p3[activePalette][(2 + offset) % p3[0].length])
          ),
          error: '#f00',
          warning: '#ffa500',
          success: '#0f0',
          info: '#00f',
        },
        lightColor: {
          p1: `#${p3[activePalette][(0 + offset) % p3[0].length]}`,
          s1: `#${p3[activePalette][(1 + offset) % p3[0].length]}`,
          a1: `#${p3[activePalette][(2 + offset) % p3[0].length]}`,
          tp1: getWhiteOrBlack(p3[activePalette][(0 + offset) % p3[0].length]),
          ts1: getWhiteOrBlack(p3[activePalette][(1 + offset) % p3[0].length]),
          ta1: getWhiteOrBlack(p3[activePalette][(2 + offset) % p3[0].length]),
          error: '#f00',
          warning: '#ffa500',
          success: '#0f0',
          info: '#00f',
        },
        primary: {
          main: `#${p3[activePalette][(0 + offset) % p3[0].length]}`,
        },
        secondary: {
          main: `#${p3[activePalette][(1 + offset) % p3[0].length]}`,
        },
        error: {
          main: '#f00',
        },
      },
    })
  );

  const { CREATE_JSON } = bindActionCreators(actionCreators, useDispatch());

  useEffect(() => {
    const new_palette = createTheme({
      palette: {
        color: {
          p1: darkMode
            ? getComplement(
                `#${p3[activePalette][(0 + offset) % p3[0].length]}`
              )
            : `#${p3[activePalette][(0 + offset) % p3[0].length]}`,
          s1: darkMode
            ? getComplement(
                `#${p3[activePalette][(1 + offset) % p3[0].length]}`
              )
            : `#${p3[activePalette][(1 + offset) % p3[0].length]}`,
          a1: darkMode
            ? getComplement(
                `#${p3[activePalette][(2 + offset) % p3[0].length]}`
              )
            : `#${p3[activePalette][(2 + offset) % p3[0].length]}`,
          tp1: darkMode
            ? getWhiteOrBlack(
                getComplement(p3[activePalette][(0 + offset) % p3[0].length])
              )
            : getWhiteOrBlack(p3[activePalette][(0 + offset) % p3[0].length]),
          ts1: darkMode
            ? getWhiteOrBlack(
                getComplement(p3[activePalette][(1 + offset) % p3[0].length])
              )
            : getWhiteOrBlack(p3[activePalette][(1 + offset) % p3[0].length]),
          ta1: darkMode
            ? getWhiteOrBlack(
                getComplement(p3[activePalette][(2 + offset) % p3[0].length])
              )
            : getWhiteOrBlack(p3[activePalette][(2 + offset) % p3[0].length]),
          error: '#f00',
          warning: '#ffa500',
          success: '#0f0',
          info: '#00f',
        },
        darkColor: {
          p1: getComplement(
            `#${p3[activePalette][(0 + offset) % p3[0].length]}`
          ),
          s1: getComplement(
            `#${p3[activePalette][(1 + offset) % p3[0].length]}`
          ),
          a1: getComplement(
            `#${p3[activePalette][(2 + offset) % p3[0].length]}`
          ),
          tp1: getWhiteOrBlack(
            getComplement(p3[activePalette][(0 + offset) % p3[0].length])
          ),
          ts1: getWhiteOrBlack(
            getComplement(p3[activePalette][(1 + offset) % p3[0].length])
          ),
          ta1: getWhiteOrBlack(
            getComplement(p3[activePalette][(2 + offset) % p3[0].length])
          ),
          error: '#f00',
          warning: '#ffa500',
          success: '#0f0',
          info: '#00f',
        },
        lightColor: {
          p1: `#${p3[activePalette][(0 + offset) % p3[0].length]}`,
          s1: `#${p3[activePalette][(1 + offset) % p3[0].length]}`,
          a1: `#${p3[activePalette][(2 + offset) % p3[0].length]}`,
          tp1: getWhiteOrBlack(p3[activePalette][(0 + offset) % p3[0].length]),
          ts1: getWhiteOrBlack(p3[activePalette][(1 + offset) % p3[0].length]),
          ta1: getWhiteOrBlack(p3[activePalette][(2 + offset) % p3[0].length]),
          error: '#f00',
          warning: '#ffa500',
          success: '#0f0',
          info: '#00f',
        },
        primary: {
          main: `#${p3[activePalette][(0 + offset) % p3[0].length]}`,
        },
        secondary: {
          main: `#${p3[activePalette][(1 + offset) % p3[0].length]}`,
        },
        error: {
          main: '#f00',
        },
      },
    });
    setPalette(new_palette);
  }, [activePalette, offset, darkMode]);

  useEffect(() => {
    setRoute(
      `${getPalette().color.p1.replace(
        '#',
        ''
      )}-${getPalette().color.s1.replace(
        '#',
        ''
      )}-${getPalette().color.a1.replace('#', '')}`
    );
    CREATE_JSON('theme', palette);
  }, [palette]);

  const nextPalette = () => {
    setActivePalette(prevState =>
      prevState + 1 < p3.length ? prevState + 1 : 0
    );
  };
  const prevPalette = () => {
    setActivePalette(prevState =>
      prevState - 1 > -1 ? prevState - 1 : p3.length - 1
    );
  };
  const shiftOffset = () => {
    setOffset(prevOffset => prevOffset + 1);
  };

  const getPalette = () => {
    return palette.palette;
  };

  const copy = () => {
    navigator.clipboard.writeText(JSON.stringify(palette.palette.color));
  };

  const setPaletteFromCodes = (codes: string[]) => {
    setPalette(
      createTheme({
        palette: {
          color: {
            p1: darkMode ? getComplement(`#${codes[0]}`) : `#${codes[0]}`,
            s1: darkMode ? getComplement(`#${codes[1]}`) : `#${codes[1]}`,
            a1: darkMode ? getComplement(`#${codes[2]}`) : `#${codes[2]}`,
            tp1: darkMode
              ? getWhiteOrBlack(getComplement(codes[0]))
              : getWhiteOrBlack(codes[0]),
            ts1: darkMode
              ? getWhiteOrBlack(getComplement(codes[1]))
              : getWhiteOrBlack(codes[1]),
            ta1: darkMode
              ? getWhiteOrBlack(getComplement(codes[2]))
              : getWhiteOrBlack(codes[2]),
            error: '#f00',
            warning: '#ffa500',
            success: '#0f0',
            info: '#00f',
          },
          darkColor: {
            p1: getComplement(`#${codes[0]}`),
            s1: getComplement(`#${codes[1]}`),
            a1: getComplement(`#${codes[2]}`),
            tp1: getWhiteOrBlack(getComplement(codes[0])),
            ts1: getWhiteOrBlack(getComplement(codes[1])),
            ta1: getWhiteOrBlack(getComplement(codes[2])),
            error: '#f00',
            warning: '#ffa500',
            success: '#0f0',
            info: '#00f',
          },
          lightColor: {
            p1: `#${codes[0]}`,
            s1: `#${codes[1]}`,
            a1: `#${codes[2]}`,
            tp1: getWhiteOrBlack(codes[0]),
            ts1: getWhiteOrBlack(codes[1]),
            ta1: getWhiteOrBlack(codes[2]),
            error: '#f00',
            warning: '#ffa500',
            success: '#0f0',
            info: '#00f',
          },
          primary: {
            main: `#${codes[0]}`,
          },
          secondary: {
            main: `#${codes[1]}`,
          },
          error: {
            main: '#f00',
          },
        },
      })
    );
    setLoading(false);
  };

  return {
    nextPalette,
    prevPalette,
    activePalette,
    shiftOffset,
    copy,
    getPalette,
    setPalette,
    setDarkMode,
    route,
    loading,
    setPaletteFromCodes,
  };
};

export default usePalette;
