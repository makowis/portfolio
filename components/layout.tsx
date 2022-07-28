import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

const Layout: FC = ({ children }) => (
  <div className={styles.container}>
    <Head>
      <title>mako_wis.com</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Layout;
