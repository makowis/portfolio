import React from 'react';
import Section from '../atoms/section';
import styles from '../../../styles/instagram.module.scss';
import { getInstagramPosts } from '../../_lib/instagram';
import Image from 'next/image';

const Instagram = async () => {
  const posts = await getInstagramPosts(9);

  if (posts.length === 0) {
    // Fallback for when no token is provided or fetch fails
    // We show placeholders to demonstrate the layout
    const placeholders = Array.from({ length: 9 }, (_, i) => ({
      id: i,
      alt: `Instagram post ${i + 1}`,
    }));

    return (
      <Section title="Instagram">
        <div className={styles.grid}>
          {placeholders.map((post) => (
            <div key={post.id} className={styles.item}>
              <div className={styles.placeholder}>Post {post.id + 1}</div>
            </div>
          ))}
          <div className={styles.message}>
            Instagram Access Token not configured.
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section title="Instagram">
      <div className={styles.grid}>
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.permalink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            <Image
              src={
                post.media_type === 'VIDEO'
                  ? post.thumbnail_url!
                  : post.media_url
              }
              alt={post.caption || 'Instagram Post'}
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
