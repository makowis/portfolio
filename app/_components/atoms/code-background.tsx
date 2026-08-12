import type { FC } from 'react';
import styles from '../../../styles/code-background.module.css';

type Snippet = {
  id: string;
  code: string;
};

const snippets: Snippet[] = [
  {
    id: 'config',
    code: `const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;`,
  },
  {
    id: 'skills',
    code: `type Skill = {
  name: string;
  category: Category;
};

export const featured = (skills: Skill[]): Skill[] =>
  skills.filter((skill) => skill.category !== 'legacy');`,
  },
  {
    id: 'hook',
    code: `useEffect(() => {
  const observer = new IntersectionObserver(reveal, {
    rootMargin: '0px 0px -20% 0px',
  });

  return () => observer.disconnect();
}, [reveal]);`,
  },
  {
    id: 'shell',
    code: `$ yarn lint && yarn test && yarn build
  Compiled successfully
  5 tests passed
  Exported 7 static routes`,
  },
];

// The snippets are repeated so the texture keeps filling a tall page.
const LAYER_COUNT = 3;

const CodeBackground: FC = () => (
  <div className={styles.container} aria-hidden="true">
    <div className={styles.glow} />
    <div className={styles.snippets}>
      {Array.from({ length: LAYER_COUNT }, (_, layer) =>
        snippets.map((snippet) => (
          <pre key={`${layer}-${snippet.id}`} className={styles.snippet}>
            {snippet.code}
          </pre>
        )),
      )}
    </div>
    <div className={styles.vignette} />
  </div>
);

export default CodeBackground;
