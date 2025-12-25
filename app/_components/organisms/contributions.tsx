'use client';

import React, { FC } from 'react';
import dynamic from 'next/dynamic';
import Section from '../atoms/section';
import styles from '../../../styles/contributions.module.scss';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false }
);

const Contributions: FC = () => (
  <Section title="Contributions">
    <div className={styles.container}>
      <GitHubCalendar
        username="makowis"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme="light"
      />
    </div>
  </Section>
);

export default Contributions;
