import * as React from 'react';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme, { RTLTheme } from 'theme';
import type { AppProps } from 'next/app';
import createEmotionCache from 'theme/create-emotion-cache';
import { CacheProvider } from '@emotion/react';
import '../styles/globals.css';
import { Main } from 'layouts';
import { useRouter } from 'next/router';
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
const clientSideEmotionCacheRTL = createEmotionCache('ar');
const RTL = ({
  emotionCacheRTL = clientSideEmotionCacheRTL,
  emotionCache = clientSideEmotionCache,
  children,
}: any) => {
  const { locale } = useRouter();

  if (locale === 'ar') {
    return <CacheProvider value={emotionCacheRTL}>{children}</CacheProvider>;
  }
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
};
function MyApp({ Component, pageProps }: AppProps & any) {
  const { locale } = useRouter();
  return (
    <RTL>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={locale === 'ar' ? RTLTheme : theme}>
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
    </RTL>
  );
}
export default MyApp;
