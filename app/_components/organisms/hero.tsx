import React, { FC } from 'react';
import Image from 'next/image';
import styles from '../../../styles/hero.module.scss';

const Hero: FC = () => (
  <div className={styles.container}>
    <div className={styles.iconWrapper}>
      <Image
        src="/icon.svg?v=2"
        alt="Henmi Makoto"
        width={120}
        height={120}
        className={styles.icon}
        priority
      />
    </div>
    <h1 className={styles.title}>Henmi Makoto</h1>
    <p className={styles.description}>ポートフォリオサイトという名のリンク集</p>
  </div>
);

export default Hero;
