import React, { FC } from 'react';
import Section from '../atoms/section';
import styles from '../../../styles/skills.module.scss';

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Language',
    skills: ['TypeScript', 'Ruby', 'Java'],
  },
  {
    name: 'Application Framework',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'Nuxt.js',
      'Ruby on Rails',
      'Spring Framework',
    ],
  },
  {
    name: 'DevOps / Cloud',
    skills: ['Amazon Web Services', 'Docker', 'GitHub Actions', 'Mackerel'],
  },
];

const Skills: FC = () => (
  <Section title="Skills">
    {skillCategories.map((category) => (
      <div key={category.name} className={styles.category}>
        <h3 className={styles.categoryTitle}>{category.name}</h3>
        <ul className={styles.list}>
          {category.skills.map((skill) => (
            <li key={skill} className={styles.item}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </Section>
);

export default Skills;
