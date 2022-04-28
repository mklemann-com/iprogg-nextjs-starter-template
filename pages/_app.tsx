import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../store/store';
import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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

  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </Provider>
    </>
  );
}

export default MyApp;
