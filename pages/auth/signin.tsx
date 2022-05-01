import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';
import LoginCard from '../../components/login/LoginCard';
import { NextPageWithLayout } from '../page';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

const SignIn: NextPageWithLayout = () => {
  return (
    <>
      <LoginCard />
    </>
  );
};

export default SignIn;

SignIn.getLayout = (page: any) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
