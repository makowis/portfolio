import React, { FC } from 'react';
import Head from 'next/head';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>mako_wis.com</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
