import './globals.css';
import './typography.css';
import './ui.css';

import type {Metadata} from 'next';
import {libreFranklin, openSans} from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'Welcome to the climbing world!',
  description:
    'Discover the climbing world with Vietclimb, the first climbing gym in Vietnam!',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${libreFranklin.variable} ${openSans.variable}`}>{children}</body>
    </html>
  );
}
