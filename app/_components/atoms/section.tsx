import React, { FC } from 'react';
import styles from '../../../styles/section.module.scss';

type Props = {
  title: string;
  children: React.ReactNode;
};

const Section: FC<Props> = ({ title, children }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

export default Section;
