import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Pricing, Home as HomeMain } from 'components';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain />
    </div>
  );
};

export default Home;
