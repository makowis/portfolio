import React, { FC } from 'react';
import Section from '../atoms/section';
import styles from '../../../styles/instagram.module.scss';
import Image from 'next/image';
import { instagramPosts } from '../../_data/instagram';

const Instagram: FC = () => {
  return (
    <Section title="Instagram">
      <div className={styles.grid}>
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <Image
              src={post.image}
              alt={post.alt}
              width={300}
              height={300}
              className={styles.image}
              unoptimized
            />
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Instagram;
