import { IHeader } from './Header';

const navigation = [
  { name: 'Menu #1', href: '#' },
  { name: 'Menu #2', href: '#' },
  { name: 'Menu #3', href: '#' },
  { name: 'Menu #4', href: '#' },
];
const loggedIn: IHeader = {
  isLoggedIn: true,
  navigation,
};

const loggedOut: IHeader = {
  isLoggedIn: false,
  navigation,
};

export const mockHeaderProps = {
  loggedIn,
  loggedOut,
};
