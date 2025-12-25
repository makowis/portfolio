import React, { FC } from 'react';
import styles from '../styles/Home.module.scss';

const Page: FC = () => (
  <>
    <h1 className={styles.title}>makowis.dev</h1>
    <p className={styles.description}>ポートフォリオサイトという名のリンク集</p>
    <section className={styles.subSection}>
      <h2 className={styles.subTitle}>Links</h2>
      <ul className={styles.links}>
        <li>
          <a
            href="https://twitter.com/mako_wis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/makoto.henmi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mako_wis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://github.com/makowis"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://speakerdeck.com/makowis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Speaker Deck
          </a>
        </li>
        <li>
          <a
            href="https://mako-wis.hatenablog.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </li>
      </ul>
    </section>
  </>
);

export default Page;
