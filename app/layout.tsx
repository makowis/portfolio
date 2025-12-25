import React, { FC } from 'react';
import type { Metadata } from 'next';
import Footer from './_layout/footer';
import styles from '../styles/layout.module.scss';
import '../styles/globals.css';

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
  <html lang="ja">
    <body>
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </body>
  </html>
);

export default Layout;
