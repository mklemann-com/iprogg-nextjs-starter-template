import PrimaryLayout from '@/components/layouts/primary/PrimaryLayout';
import Profile from '@/components/profile/Profile';
import { useSession } from 'next-auth/react';
import { NextPageWithLayout } from './page';

const HomePage: NextPageWithLayout = () => {
  const { data: session } = useSession();

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {!session ? (
          <>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Not logged in!
            </h2>
          </>
        ) : (
          <>
            <Profile
              name={session?.user?.name}
              email={session?.user?.email}
              imageUrl={session?.user?.image}
            />
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;

HomePage.getLayout = (page: any) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
