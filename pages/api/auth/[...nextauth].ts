import { signInWithEmailAndPassword } from 'firebase/auth';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';
import { auth } from '../../../firebase/firebase';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: any, req) {
        console.log({ credentials });
        const { email, password } = credentials;
        console.log({ req });

        try {
          const res = await signInWithEmailAndPassword(auth, email, password);
          console.log({ res });

          // .then((userAuth) => {
          //   dispatch(
          //     login({
          //       email: userAuth.user.email,
          //       uid: userAuth.user.uid,
          //       displayName: userAuth.user.displayName,
          //       photoUrl: userAuth.user.photoURL,
          //     })
          //   );
          // })
          // .catch((error) => alert(error));

          // Add logic here to look up the user from the credentials supplied
          const user = {
            id: res.user.uid,
            name: res.user.displayName,
            email: res.user.email,
          };

          if (user) {
            // Any object returned will be saved in `user` property of the JWT
            return user;
          } else {
            // If you return null then an error will be displayed advising the user to check their details.
            return null;

            // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
          }
        } catch (e) {
          console.error(e);
          return null;
          // throw new Error(e);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user.username = session.user.name
        .split(' ')
        .join('')
        .toLocaleLowerCase();

      session.user.uid = token.sub; // user id from google
      return session;
    },
  },
});
