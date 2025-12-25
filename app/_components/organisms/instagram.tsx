import React, { FC } from 'react';
import Section from '../atoms/section';
import styles from '../../../styles/instagram.module.scss';

const Instagram: FC = () => {
  // Placeholder data - in a real scenario, this would come from an API or config
  const posts = Array.from({ length: 9 }, (_, i) => ({
    id: i,
    alt: `Instagram post ${i + 1}`,
  }));

  return (
    <Section title="Instagram">
      <div className={styles.grid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.item}>
            {/* 
              In a real implementation, use next/image here.
              For now, using a CSS placeholder to demonstrate the layout.
            */}
            <div className={styles.placeholder}>Post {post.id + 1}</div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Instagram;
