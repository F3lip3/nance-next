import { Inter } from '@next/font/google';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { trpc } from '../common/trpc';
import { ToastProvider } from '../contexts/ToastContext';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${inter.className} font-sans`}>
      <SessionProvider session={pageProps.session}>
        <ToastProvider>
          <Component {...pageProps} />
        </ToastProvider>
      </SessionProvider>
    </main>
  );
};

export default trpc.withTRPC(App);
