import type { FC, ReactNode } from 'react';
import styles from '../../../styles/section.module.css';

type Props = {
  title: string;
  children: ReactNode;
};

const Section: FC<Props> = ({ title, children }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
