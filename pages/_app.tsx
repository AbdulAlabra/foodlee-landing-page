import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'theme';
import type { AppProps } from 'next/app';
import createEmotionCache from 'theme/create-emotion-cache';
import { CacheProvider } from '@emotion/react';
import '../styles/globals.css';
import { Main } from 'layouts';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & any) {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Main
          themeMode="light"
          paletteType="orange"
          setThemePalette={() => undefined}
          themeToggler={() => undefined}
        >
          <Component {...pageProps} />
        </Main>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default MyApp;
