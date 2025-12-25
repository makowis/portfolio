import React, { FC } from 'react';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import Footer from './_components/organisms/footer';
import styles from '../styles/layout.module.scss';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    default: 'mako_wis.dev',
    template: '%s | mako_wis.dev',
  },
  description: 'mako_wisのポートフォリオサイト',
  openGraph: {
    title: 'mako_wis.dev',
    description: 'mako_wisのポートフォリオサイト',
    url: 'https://makowis.dev',
    siteName: 'mako_wis.dev',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mako_wis.dev',
    description: 'mako_wisのポートフォリオサイト',
    creator: '@mako_wis',
  },
};

const Layout: FC<Props> = ({ children }) => (
  <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
    <body>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
);

export default Layout;
