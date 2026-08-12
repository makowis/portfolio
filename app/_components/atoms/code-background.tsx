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
  {
    id: 'sitemap',
    code: `export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: 'https://makowis.dev', priority: 1 }];
}`,
  },
  {
    id: 'test',
    code: `it('renders correctly', () => {
  const { container } = render(<Page />);

  expect(container).toMatchSnapshot();
});`,
  },
  {
    id: 'workflow',
    code: `jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: yarn build`,
  },
];

// Repeating the snippets fills a tall page; fixed shuffles hide the loop.
const layers: number[][] = [
  [0, 1, 2, 3, 4, 5, 6],
  [5, 2, 6, 0, 4, 1, 3],
];

const CodeBackground: FC = () => (
  <div className={styles.container} aria-hidden="true">
    <div className={styles.glow} />
    <div className={styles.snippets}>
      {layers.flatMap((order, layer) =>
        order.map((index) => (
          <pre
            key={`${layer}-${snippets[index].id}`}
            className={styles.snippet}
          >
            {snippets[index].code}
          </pre>
        )),
      )}
    </div>
    <div className={styles.vignette} />
  </div>
);

export default CodeBackground;
