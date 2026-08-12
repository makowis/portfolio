'use client';

import type { FC } from 'react';
import dynamic from 'next/dynamic';
import Section from '../atoms/section';
import VisuallyHidden from '../atoms/visually-hidden';
import styles from '../../../styles/contributions.module.css';

const GitHubCalendar = dynamic(
  () => import('react-github-calendar').then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const calendarTheme = {
  dark: ['#111b2e', '#1e3a5f', '#0e7490', '#22d3ee', '#5eead4'],
};

const Contributions: FC = () => (
  <Section title="Contributions">
    <div className={styles.container}>
      <GitHubCalendar
        username="makowis"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme="dark"
        theme={calendarTheme}
      />
    </div>
    <div className={styles.link}>
      <a
        href="https://github.com/makowis"
        target="_blank"
        rel="noopener noreferrer"
      >
        @makowis on GitHub
        <VisuallyHidden>（新しいタブで開きます）</VisuallyHidden>
      </a>
    </div>
  </Section>
);

export default Contributions;
