import React, { FC } from 'react';
import styles from '../styles/Home.module.scss';
import Layout from '../components/layout';

const Home: FC = () => (
  <Layout>
    <h1 className={styles.title}>
      Welcome to
      {' '}
      <a href="https://nextjs.org">Next.js!</a>
    </h1>

    <p className={styles.description}>
      Get started by editing
      {' '}
      <code className={styles.code}>pages/index.js</code>
    </p>
  </Layout>
);

export default Home;