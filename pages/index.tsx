import React, { FC } from 'react';
import styles from '../styles/Home.module.scss';
import Layout from '../components/layout';

const Home: FC = () => (
  <Layout>
    <h1 className={styles.title}>makowis.com</h1>
    <p>ポートフォリオサイトという名のリンク集</p>
    <ul className={styles.links}>
      <li>
        <a href="https://twitter.com/mako_wis">Twitter</a>
      </li>
      <li>
        <a href="https://www.facebook.com/makoto.henmi">Facebook</a>
      </li>
      <li>
        <a href="https://www.instagram.com/mako_wis/">Instagram</a>
      </li>
      <li>
        <a href="https://github.com/makowis">GitHub</a>
      </li>
      <li>
        <a href="https://mako-wis.hatenablog.com/">ブログ：makoラボ</a>
      </li>
      <li>
        <a href="https://speakerdeck.com/makowis">Speaker Deck</a>
      </li>
    </ul>
  </Layout>
);

export default Home;
