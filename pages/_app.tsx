import '../src/styles/globals.css';
import type { AppProps } from 'next/app';

// import App from './App';
import { Provider, useSelector } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { rootReducer, rootState } from '../src/state/reducers';
import { ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/core/createEmotionCache';
import Head from 'next/head';
import { FC, useEffect, useState } from 'react';
import usePalette from '../src/hooks/usePalette';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const clientSideEmotionCache = createEmotionCache();

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore(rootReducer, composedEnhancer);

interface RootAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
interface IThemedComponent {
  Component: any;
  pageProps: any;
  store: any;
}

const ThemedComponent: FC<IThemedComponent> = ({
  Component,
  pageProps,
  store,
}) => {
  const palette = usePalette();
  const rootState = useSelector((state: rootState) => state.rootState);
  const [activeTheme, setActiveTheme] = useState(rootState.theme);

  useEffect(() => {
    setActiveTheme(rootState.theme);
  }, [rootState.theme]);

  return (
    <ThemeProvider theme={activeTheme}>
      <ToastContainer toastClassName="custom-notify" position="top-center" />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default function Root(props: RootAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemedComponent
          Component={Component}
          pageProps={pageProps}
          store={store}
        />
      </Provider>
    </CacheProvider>
  );
}
