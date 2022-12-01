import { Inter } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

const inter = Inter({ subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${inter.className} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
};

export default trpc.withTRPC(App);
