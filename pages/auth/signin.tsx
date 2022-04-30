import { GetServerSidePropsContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import React from 'react';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

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

const SignIn = () => {
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
