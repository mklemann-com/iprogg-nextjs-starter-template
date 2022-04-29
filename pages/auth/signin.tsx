import { GetServerSidePropsContext } from 'next';
import { getProviders, getSession, useSession } from 'next-auth/react';
import React from 'react';
import Header from '../../components/Header';
import Login from '../../components/Login/Login';

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const providers = await getProviders();
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
    props: { providers },
  };
}

const SignIn = ({ providers }: { providers: any[] }) => {
  const { data: session } = useSession();
  return (
    <>
      <Header />
      {!session?.user ? (
        <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <Login />
        </div>
      ) : (
        <>
          <h3>{session?.user?.name}</h3>
          <p>{session?.user?.email}</p>
        </>
      )}
    </>
  );
};

export default SignIn;
