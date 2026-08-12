import type { FC, ReactNode } from 'react';
import styles from '../../../styles/visually-hidden.module.css';

type Props = {
  children: ReactNode;
};

const VisuallyHidden: FC<Props> = ({ children }) => (
  <span className={styles.visuallyHidden}>{children}</span>
);

export default VisuallyHidden;
