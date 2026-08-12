import type { FC } from 'react';
import Image from 'next/image';
import styles from '../../../styles/hero.module.css';

const Hero: FC = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>makowis.dev</h1>
    <p className={styles.name}>Henmi Makoto</p>
    <p className={styles.description}>ポートフォリオサイトという名のリンク集</p>
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
  </div>
);

export default Hero;
