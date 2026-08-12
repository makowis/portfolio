import type { FC } from 'react';
import VisuallyHidden from '../atoms/visually-hidden';
import styles from '../../../styles/footer.module.css';

const Footer: FC = () => (
  <footer className={styles.footer}>
    <a
      href="https://github.com/makowis"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by mako_wis
      <VisuallyHidden>（新しいタブで開きます）</VisuallyHidden>
    </a>
  </footer>
);

export default Footer;
