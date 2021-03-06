import Head from 'next/head';
import { FC } from 'react';
interface Props {
  title?: string;
}

const SEO: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
SEO.defaultProps = {
  title: 'Foodlee',
};
export default SEO;
