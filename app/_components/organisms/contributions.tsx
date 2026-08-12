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

// The empty level stays well above the card background so it reads as a block.
const calendarTheme = {
  dark: ['#37455f', '#14657f', '#0e9bb8', '#22d3ee', '#7ef3e0'],
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
