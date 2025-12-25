import React, { FC } from 'react';
import Image from 'next/image';
import styles from '../../../styles/hero.module.scss';

const Hero: FC = () => (
  <div className={styles.container}>
    <div className={styles.iconWrapper}>
      <Image
        src="/me.png"
        alt="Hennmi Makoto"
        width={120}
        height={120}
        className={styles.icon}
        priority
      />
    </div>
    <h1 className={styles.title}>Hennmi Makoto</h1>
    <p className={styles.description}>makowis.dev</p>
  </div>
);

export default Hero;
