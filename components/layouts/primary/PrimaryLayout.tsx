import Footer from '@/components/footer/AppFooter';
import Header from '@/components/header/AppHeader';
import { navigation } from '@/navigation';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { ReactNode } from 'react';

export interface IPrimaryLayout extends React.ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  justify?: 'items-center' | 'items-start';
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children, ...divProps }) => {
  const { data: session, status } = useSession();
  if (status === 'loading') {
    return <>Loading...</>;
  }

  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>

      <div {...divProps}>
        <Header isLoggedIn={!!session} navigation={navigation} />
        <main>
          <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer navigation={navigation} />
      </div>
    </>
  );
};

export default PrimaryLayout;
