# GitHub Copilot Instructions - Portfolio Project

> **重要**: プロジェクトの技術スタック、ディレクトリ構造、コーディング規約などに変更があった場合は、必ずこのファイルも更新すること。

## プロジェクト概要

このプロジェクトは **makowis.dev** というポートフォリオサイトです。
Next.js (App Router) を使用した静的サイトで、GitHub Pagesにデプロイされています。

## 技術スタック

| カテゴリ               | 技術                            |
| ---------------------- | ------------------------------- |
| フレームワーク         | Next.js 16 (App Router)         |
| 言語                   | TypeScript 5.9                  |
| UI                     | React 19                        |
| スタイリング           | CSS Modules                     |
| テスト                 | Jest 30 + React Testing Library |
| リンター               | ESLint 9 + Prettier             |
| パッケージマネージャー | Yarn 4 (Berry)                  |
| デプロイ               | GitHub Pages (GitHub Actions)   |

## ディレクトリ構造

```
portfolio/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # ルートレイアウト
│   ├── page.tsx                # トップページ
│   ├── robots.ts               # robots.txt を生成
│   ├── sitemap.ts              # sitemap.xml を生成
│   ├── icon.svg                # ファビコン（favicon.ico / apple-icon.png も同階層）
│   └── _components/            # UIコンポーネント（ルーティング対象外）
│       ├── atoms/              # 最小単位のコンポーネント
│       │   └── section.tsx
│       └── organisms/          # ページを構成するブロック
│           ├── contributions.tsx
│           ├── footer.tsx
│           ├── hero.tsx
│           ├── links.tsx
│           └── skills.tsx
├── styles/                     # スタイルファイル
│   ├── globals.css             # グローバルスタイル
│   └── *.module.css            # CSSモジュール
├── test/                       # テストファイル
│   ├── tsconfig.jest.json      # テスト用TypeScript設定
│   └── pages/                  # テスト本体とスナップショット
├── public/                     # 静的ファイル（CNAME, .nojekyll）
└── config/                     # 設定ファイル
    └── jest/                   # Jest関連設定
```

## コーディング規約

### TypeScript / React

- **関数コンポーネント**: `FC` 型を使用する

  ```tsx
  import type { FC } from 'react';
  const Component: FC = () => <div>...</div>;
  export default Component;
  ```

  `jsx: "react-jsx"` により JSX の変換に `React` の値インポートは不要。React の型は `import type` で個別に取り込む

- **Props型定義**: コンポーネントファイル内で `type Props` として定義

  ```tsx
  import type { FC, ReactNode } from 'react';

  type Props = {
    children: ReactNode;
  };
  ```

- **インポート順序**:
  1. React関連
  2. Next.js関連
  3. 外部ライブラリ
  4. 内部コンポーネント
  5. スタイル

### スタイリング

- **CSS Modules** を使用
- ファイル名: `*.module.css`
- クラス名: camelCase (`styles.className`)
- グローバルスタイルは `styles/globals.css` に記述
- ネストは CSS Nesting (`&:hover` など) をそのまま使用できる

### テスト

- テストファイルは `test/` ディレクトリに配置
- ファイル名: `*.test.tsx`
- スナップショットテストを活用
- React Testing Library を使用

```tsx
import { render } from '@testing-library/react';
import Component from '../../app/component';

it('renders correctly', () => {
  const { container } = render(<Component />);
  expect(container).toMatchSnapshot();
});
```

## コマンド

| コマンド          | 説明                           |
| ----------------- | ------------------------------ |
| `yarn dev`        | 開発サーバー起動               |
| `yarn build`      | 本番ビルド（静的エクスポート） |
| `yarn lint`       | ESLint + Prettier チェック     |
| `yarn lint:fix`   | リント自動修正                 |
| `yarn test`       | テスト実行                     |
| `yarn test:watch` | テストウォッチモード           |

## 重要な設定

### Next.js 設定 (`next.config.ts`)

- `output: 'export'` - 静的サイトとしてエクスポート

### TypeScript 設定

- `strict: true` - 厳格モード有効
- `jsx: 'react-jsx'` - React 17+ の新しいJSX変換

### ESLint 設定

- `eslint-config-next` をベースに使用
- 除外ディレクトリ: `out/`, `.next/`, `node_modules/`, `coverage/`

## 注意事項

1. **静的エクスポート**: このサイトは静的にエクスポートされるため、サーバーサイド機能（API Routes, Server Actions等）は使用不可

2. **App Router**: `pages/` ディレクトリではなく `app/` ディレクトリを使用

3. **コンポーネント配置**: UIコンポーネントは `app/_components/` に配置（アンダースコアプレフィックスでルーティング対象外）。Atomic Design に沿って、最小単位は `atoms/`、ページを構成するブロックは `organisms/` へ置く

4. **メタデータ**: `layout.tsx` で `Metadata` 型を使用してSEO設定

5. **robots.txt / sitemap.xml**: `app/robots.ts` と `app/sitemap.ts` で生成する。静的エクスポートのため `export const dynamic = 'force-static'` が必須

## 新規ファイル作成時のテンプレート

### ページコンポーネント

```tsx
import type { FC } from 'react';
import styles from '../styles/PageName.module.css';

const PageName: FC = () => (
  <>
    <h1 className={styles.title}>タイトル</h1>
  </>
);

export default PageName;
```

### レイアウトコンポーネント

```tsx
import type { FC } from 'react';
import styles from '../../styles/componentName.module.css';

const ComponentName: FC = () => (
  <div className={styles.container}>{/* コンテンツ */}</div>
);

export default ComponentName;
```

## CI/CD

- Codecov でカバレッジ計測
- GitHub Actions + GitHub Pages で自動デプロイ（mainブランチ）
- `peaceiris/actions-gh-pages` を使用して `out/` ディレクトリをデプロイ

## プルリクエスト作成前の必須チェック

**プルリクエストを作成する前に、必ず以下のコマンドを実行してすべてパスすることを確認すること：**

```bash
# 1. テスト実行
yarn test

# 2. Lint チェック
yarn lint

# 3. ビルド確認
yarn build
```

すべてのチェックが通らない限り、プルリクエストを作成してはいけない。
