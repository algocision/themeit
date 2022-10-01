import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import usePalette from '../src/hooks/usePalette';
import { fonts, routes } from '../src/core';
import { getContrast } from '../src/hooks/usePalette/scoreColors';
import { useRouter } from 'next/router';

interface Props {
  codes: string[];
}

const Home: NextPage<Props> = ({ codes }) => {
  const classes = useStyles();

  const palette = usePalette();
  const router = useRouter();

  useEffect(() => {
    if (codes && codes.length > 0 && palette.loading) {
      palette.setPaletteFromCodes(codes);
    }
  }, [codes, palette.loading]);

  useEffect(() => {
    if (palette.route) {
      router.push(
        {
          pathname: `/[codes]`,
          query: {
            codes: palette.route,
          },
        },
        `/${palette.route}`,
        { shallow: true }
      );
    }
  }, [palette.route]);

  return (
    <>
      <Head>
        <title>Developer Dashboard</title>
        <meta name="description" content="Develop Dashboard description" />
        <meta
          property="og:image"
          content={`localhost:3000/api/image?palette=${palette.route}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.container}>
        <div className={classes.sideNav}>
          <Link href={routes.index}>
            <div
              className={classes.button}
              onClick={() => {
                palette.nextPalette();
              }}
            >
              Home
            </div>
          </Link>
          <div
            className={classes.button}
            onClick={() => {
              palette.nextPalette();
            }}
          >
            Next
          </div>
          <div
            className={classes.button}
            onClick={() => {
              palette.prevPalette();
            }}
          >
            Previous
          </div>
          <div
            className={classes.button}
            onClick={() => {
              palette.shiftOffset();
            }}
          >
            Cycle
          </div>
          <div
            className={classes.button}
            onClick={() => {
              palette.copy();
            }}
          >
            Copy
          </div>
          <div
            className={classes.button}
            onClick={() => {
              palette.setDarkMode((prevState: boolean) => !prevState);
            }}
          >
            Toggle Darkmode
          </div>
        </div>
        <div className={classes.paletteContainer}>
          <div className={classes.paletteModeContainer}>
            <div className={classes.paletteItemPL}>
              <p
                className={classes.textItemPL}
                onClick={() => {
                  navigator.clipboard.writeText(
                    palette.getPalette().lightColor.p1
                  );
                }}
              >
                {palette.getPalette().lightColor.p1}
              </p>
              <p className={classes.textItemPL}>
                {getContrast(
                  palette.getPalette().lightColor.p1,
                  palette.getPalette().lightColor.tp1
                )}
              </p>
            </div>

            <div className={classes.paletteItemSL}>
              <p
                className={classes.textItemSL}
                onClick={() => {
                  navigator.clipboard.writeText(
                    palette.getPalette().lightColor.s1
                  );
                }}
              >
                {palette.getPalette().lightColor.s1}
              </p>
              <p className={classes.textItemSL}>
                {getContrast(
                  palette.getPalette().lightColor.s1,
                  palette.getPalette().lightColor.ts1
                )}
              </p>
            </div>

            <div className={classes.paletteItemAL}>
              <p
                className={classes.textItemAL}
                onClick={() => {
                  navigator.clipboard.writeText(
                    palette.getPalette().lightColor.a1
                  );
                }}
              >
                {palette.getPalette().lightColor.a1}
              </p>
              <p className={classes.textItemAL}>
                {getContrast(
                  palette.getPalette().lightColor.a1,
                  palette.getPalette().lightColor.ta1
                )}
              </p>
            </div>
          </div>

          <div className={classes.paletteModeContainer}>
            <div className={classes.paletteItemPD}>
              <p
                className={classes.textItemPD}
                onClick={() => {
                  navigator.clipboard.writeText(
                    palette.getPalette().darkColor.p1
                  );
                }}
              >
                {palette.getPalette().darkColor.p1}
              </p>
              <p className={classes.textItemPD}>
                {getContrast(
                  palette.getPalette().darkColor.p1,
                  palette.getPalette().darkColor.tp1
                )}
              </p>
            </div>

            <div className={classes.paletteItemSD}>
              <p
                className={classes.textItemSD}
                onClick={() => {
                  navigator.clipboard.writeText(
                    palette.getPalette().darkColor.s1
                  );
                }}
              >
                {palette.getPalette().darkColor.s1}
              </p>
              <p className={classes.textItemSD}>
                {getContrast(
                  palette.getPalette().darkColor.s1,
                  palette.getPalette().darkColor.ts1
                )}
              </p>
            </div>

            <div className={classes.paletteItemAD}>
              <p
                className={classes.textItemAD}
                onClick={() => {
                  navigator.clipboard.writeText(
                    palette.getPalette().darkColor.a1
                  );
                }}
              >
                {palette.getPalette().darkColor.a1}
              </p>
              <p className={classes.textItemAD}>
                {getContrast(
                  palette.getPalette().darkColor.a1,
                  palette.getPalette().darkColor.ta1
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'absolute',
    display: 'flex',
    background: theme.palette.color.p1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paletteContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: 400,
    width: 600,
    border: `3px solid ${theme.palette.color.tp1}`,
  },
  paletteModeContainer: {
    position: 'relative',
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  paletteItemPL: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33.333%',
    height: '100%',
    backgroundColor: theme.palette.lightColor.p1,
  },
  paletteItemSL: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33.333%',
    height: '100%',
    backgroundColor: theme.palette.lightColor.s1,
  },
  paletteItemAL: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33.333%',
    height: '100%',
    backgroundColor: theme.palette.lightColor.a1,
  },
  textItemPL: {
    color: theme.palette.lightColor.tp1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  textItemSL: {
    color: theme.palette.lightColor.ts1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  textItemAL: {
    color: theme.palette.lightColor.ta1,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  paletteItemPD: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33.333%',
    height: '100%',
    backgroundColor: theme.palette.darkColor.p1,
  },
  paletteItemSD: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33.333%',
    height: '100%',
    backgroundColor: theme.palette.darkColor.s1,
  },
  paletteItemAD: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '33.333%',
    height: '100%',
    backgroundColor: theme.palette.darkColor.a1,
  },
  textItemPD: {
    color: theme.palette.darkColor.tp1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  textItemSD: {
    color: theme.palette.darkColor.ts1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
  textItemAD: {
    color: theme.palette.darkColor.ta1,
    '&:hover': {
      cursor: 'pointer',
    },
  },

  sideNav: {
    position: 'fixed',
    right: 0,
    width: 180,
    height: '100%',
    borderLeft: `1px solid ${theme.palette.color.a1}`,
    backgroundColor: theme.palette.color.s1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    gap: 20,
  },
  button: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    userSelect: 'none',

    fontFamily: fonts.bebe,
    fontSize: 18,
    border: `2px solid ${theme.palette.color.p1}`,

    width: 100,
    height: 60,
    // margin: 20,
    backgroundColor: theme.palette.color.s1,
    color: theme.palette.color.ts1,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export default Home;
