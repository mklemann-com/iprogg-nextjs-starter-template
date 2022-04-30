import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { open } from '../../features/modalSlice';

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: 'Menu #1', href: '#' },
  { name: 'Menu #2', href: '#' },
  { name: 'Menu #3', href: '#' },
  { name: 'Menu #4', href: '#' },
];

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  const { data: session } = useSession();
  const dispatch = useDispatch();

  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Link href="/">
              <a className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                Home
              </a>
            </Link>
            {!session ? (
              <>
                <a
                  href="#"
                  onClick={() => signIn()}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  onClick={() => dispatch(open())}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign in (Modal)
                </a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  onClick={() => signOut()}
                  className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
                >
                  Sign out
                </a>
              </>
            )}
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
export default Header;
