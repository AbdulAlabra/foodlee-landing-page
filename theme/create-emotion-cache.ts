import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

function createEmotionCache(locale?: string) {
  const config =
    locale === 'ar'
      ? { key: 'css', stylisPlugins: [rtlPlugin] }
      : { key: 'css' };
  //@ts-ignore
  return createCache(config);
}
export default createEmotionCache;
