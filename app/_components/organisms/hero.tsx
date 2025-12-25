import React, { FC } from 'react';
import styles from '../../../styles/hero.module.scss';

const Hero: FC = () => (
  <>
    <h1 className={styles.title}>makowis.dev</h1>
    <p className={styles.description}>ポートフォリオサイトという名のリンク集</p>
  </>
);

export default Hero;
