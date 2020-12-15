import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import styles from '../styles/layout.module.scss';

const Layout: FC = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>mako_wis portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      {children}
    </main>
    <footer className={styles.footer}>
      <a
        href="https://github.com/makowis"
        target="_parent"
        rel="noopener noreferrer"
      >
        Powered by mako_wis
      </a>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element
}

export default Layout;