import LoginModal from '@/components/modal/LoginModal';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { wrapper } from '../store/store';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (userAuth) => {
  //     if (userAuth) {
  //       // user is logged in
  //       dispatch(
  //         login({
  //           email: userAuth.email,
  //           uid: userAuth.uid,
  //           displayName: userAuth.displayName,
  //           photoUrl: userAuth.photoURL,
  //         })
  //       );
  //     } else {
  //       // user is logged out
  //       dispatch(logout());
  //     }
  //   });
  // }, []);
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page: any) => page);
  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>iProGG Next.JS Starter Template</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
        <LoginModal />
      </SessionProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
