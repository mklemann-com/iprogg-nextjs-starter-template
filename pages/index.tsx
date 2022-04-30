import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Header from '../components/Header/Header';
import MiniProfile from '../components/MiniProfile/MiniProfile';

const IndexPage: NextPage = () => {
  const { data: session } = useSession();

  if (!session || !session.user) {
    return <>Loading...</>;
  }

  const { name, email, image } = session.user;

  return (
    <>
      <Header />

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {!session.user ? (
            <>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Not logged in!
              </h2>
            </>
          ) : (
            <>
              <MiniProfile name={name} email={email} imageUrl={image} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
