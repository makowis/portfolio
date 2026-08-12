import type { FC } from 'react';
import styles from '../../../styles/code-background.module.css';

type Snippet = {
  id: string;
  code: string;
};

// One snippet per skill listed on the page, ordered so that related
// languages never end up next to each other.
const snippets: Snippet[] = [
  {
    id: 'typescript',
    code: `type Category = 'language' | 'framework' | 'infra';

export const byCategory = (skills: Skill[], key: Category) =>
  skills.filter((skill) => skill.category === key);`,
  },
  {
    id: 'rails',
    code: `class SkillsController < ApplicationController
  def index
    @skills = Skill.featured.order(:name)
  end
end`,
  },
  {
    id: 'docker',
    code: `FROM node:22-slim AS builder
WORKDIR /app
COPY . .
RUN corepack enable && yarn install --immutable
RUN yarn build`,
  },
  {
    id: 'vue',
    code: `<script setup lang="ts">
const props = defineProps<{ skills: Skill[] }>();

const featured = computed(() =>
  props.skills.filter((skill) => skill.featured),
);
</script>`,
  },
  {
    id: 'spring',
    code: `@RestController
@RequestMapping("/api/skills")
class SkillController {
  @GetMapping
  List<Skill> index() {
    return service.findFeatured();
  }
}`,
  },
  {
    id: 'actions',
    code: `jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v5
      - run: yarn build`,
  },
  {
    id: 'ruby',
    code: `class Skill
  attr_reader :name, :category

  def featured?
    category != :legacy
  end
end`,
  },
  {
    id: 'nextjs',
    code: `const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;`,
  },
  {
    id: 'mackerel',
    code: `[plugin.metrics.nginx]
command = "mackerel-plugin-nginx -port=8080"

[plugin.checks.https]
command = ["check-http", "-u", "https://makowis.dev"]`,
  },
  {
    id: 'react',
    code: `const SkillList: FC<Props> = ({ skills }) => (
  <ul>
    {skills.map((skill) => (
      <li key={skill.name}>{skill.name}</li>
    ))}
  </ul>
);`,
  },
  {
    id: 'java',
    code: `public record Skill(String name, Category category) {
  public boolean isFeatured() {
    return category != Category.LEGACY;
  }
}`,
  },
  {
    id: 'aws',
    code: `$ aws s3 sync ./out s3://makowis.dev --delete
$ aws cloudfront create-invalidation \\
    --distribution-id E1MAKOWISDEV --paths '/*'`,
  },
  {
    id: 'nuxt',
    code: `export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/image'],
  app: { head: { title: 'makowis.dev' } },
});`,
  },
  {
    id: 'shell',
    code: `$ yarn lint && yarn test && yarn build
  Compiled successfully
  5 tests passed
  Exported 7 static routes`,
  },
];

const CodeBackground: FC = () => (
  <div className={styles.container} aria-hidden="true">
    <div className={styles.glow} />
    <div className={styles.snippets}>
      {snippets.map((snippet) => (
        <pre key={snippet.id} className={styles.snippet}>
          {snippet.code}
        </pre>
      ))}
    </div>
    <div className={styles.vignette} />
  </div>
);

export default CodeBackground;
