import React, { FC } from 'react';
import Section from '../atoms/section';
import styles from '../../../styles/links.module.scss';

const Links: FC = () => (
  <Section title="Links">
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
  </Section>
);

export default Links;
