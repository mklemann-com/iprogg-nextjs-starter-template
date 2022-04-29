import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { AppState } from '../store/store';

const IndexPage: NextPage = () => {
  const { data: session } = useSession();
  const showModal = useSelector((state: AppState) => state.modal.modal);

  return (
    <>
      <Header />

      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {!session?.user ? (
            <>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Not logged in!
              </h2>
            </>
          ) : (
            <>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Logged in as {session?.user?.name} ({session?.user?.email})
              </h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
