import type { NextPage } from 'next';
import Head from 'next/head';
import Counter from '../features/counter/Counter';

const IndexPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>iProGG Next.JS Starter Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Counter />
    </div>
  );
};

export default IndexPage;
