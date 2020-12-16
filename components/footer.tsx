import React, { FC } from 'react';
import styles from '../styles/footer.module.scss';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://github.com/makowis"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by mako_wis
    </a>
  </footer>
);

export default Footer;