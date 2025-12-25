import React, { FC } from 'react';
import Section from '../atoms/section';
import styles from '../../../styles/links.module.scss';

type LinkItem = {
  name: string;
  url: string;
};

const items: LinkItem[] = [
  { name: 'Twitter', url: 'https://twitter.com/mako_wis' },
  { name: 'Facebook', url: 'https://www.facebook.com/makoto.henmi' },
  { name: 'Instagram', url: 'https://www.instagram.com/mako_wis/' },
  { name: 'GitHub', url: 'https://github.com/makowis' },
  { name: 'Speaker Deck', url: 'https://speakerdeck.com/makowis' },
  { name: 'Blog', url: 'https://mako-wis.hatenablog.com/' },
];

const Links: FC = () => (
  <Section title="Links">
    <ul className={styles.links}>
      {items.map((item) => (
        <li key={item.name}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </Section>
);

export default Links;
