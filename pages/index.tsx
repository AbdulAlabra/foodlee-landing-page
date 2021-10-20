import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Pricing, Home as HomeMain } from 'components';
import useTranslation from 'next-translate/useTranslation';

const Home: NextPage = () => {
  const { t, lang } = useTranslation('common');
  return (
    <div>
      <Head>
        <title>{t('foodlee')}</title>
        <meta name="description" content={t('foodleeDisc')} />
        <link rel="icon" href="/f-logo.svg" />
      </Head>
      <HomeMain />
    </div>
  );
};

export default Home;
