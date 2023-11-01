import {Libre_Franklin, Open_Sans} from 'next/font/google';

export const libreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: '--font-title',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-body',
});
