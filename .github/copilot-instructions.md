# GitHub Copilot Instructions - Portfolio Project

> **重要**: プロジェクトの技術スタック、ディレクトリ構造、コーディング規約などに変更があった場合は、必ずこのファイルも更新すること。

## プロジェクト概要

このプロジェクトは **makowis.dev** というポートフォリオサイトです。
Next.js (App Router) を使用した静的サイトで、GitHub Pagesにデプロイされています。

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript 5.9 |
| UI | React 19 |
| スタイリング | SCSS Modules + CSS |
| テスト | Jest 30 + React Testing Library |
| リンター | ESLint 9 + Prettier |
| パッケージマネージャー | Yarn 4 (Berry) |
| デプロイ | GitHub Pages (GitHub Actions) |

## ディレクトリ構造

```
portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # トップページ
│   └── _layout/            # レイアウトコンポーネント
│       └── footer.tsx      # フッター
├── styles/                 # スタイルファイル
│   ├── globals.css         # グローバルスタイル
│   ├── *.module.scss       # SCSSモジュール
├── test/                   # テストファイル
│   └── pages/              # ページテスト
├── public/                 # 静的ファイル
└── config/                 # 設定ファイル
    └── jest/               # Jest関連設定
```

## コーディング規約

### TypeScript / React

- **関数コンポーネント**: `FC` 型を使用する
  ```tsx
  import React, { FC } from 'react';
  const Component: FC = () => <div>...</div>;
  export default Component;
  ```

- **Props型定義**: コンポーネントファイル内で `type Props` として定義
  ```tsx
  type Props = {
    children: React.ReactNode;
  };
  ```

- **インポート順序**:
  1. React関連
  2. Next.js関連
  3. 外部ライブラリ
  4. 内部コンポーネント
  5. スタイル

### スタイリング

- **CSS Modules (SCSS)** を使用
- ファイル名: `*.module.scss`
- クラス名: camelCase (`styles.className`)
- グローバルスタイルは `styles/globals.css` に記述

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

| コマンド | 説明 |
|---------|------|
| `yarn dev` | 開発サーバー起動 |
| `yarn build` | 本番ビルド（静的エクスポート） |
| `yarn start` | 本番サーバー起動 |
| `yarn lint` | ESLint + Prettier チェック |
| `yarn lint:fix` | リント自動修正 |
| `yarn test` | テスト実行 |
| `yarn test:watch` | テストウォッチモード |

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

3. **レイアウトコンポーネント**: 共通レイアウトは `app/_layout/` に配置（アンダースコアプレフィックスでルーティング対象外）

4. **メタデータ**: `layout.tsx` で `Metadata` 型を使用してSEO設定

## 新規ファイル作成時のテンプレート

### ページコンポーネント

```tsx
import React, { FC } from 'react';
import styles from '../styles/PageName.module.scss';

const PageName: FC = () => (
  <>
    <h1 className={styles.title}>タイトル</h1>
  </>
);

export default PageName;
```

### レイアウトコンポーネント

```tsx
import React, { FC } from 'react';
import styles from '../../styles/componentName.module.scss';

const ComponentName: FC = () => (
  <div className={styles.container}>
    {/* コンテンツ */}
  </div>
);

export default ComponentName;
```

## CI/CD

- Codecov でカバレッジ計測
- GitHub Actions + GitHub Pages で自動デプロイ（mainブランチ）
- `peaceiris/actions-gh-pages` を使用して `out/` ディレクトリをデプロイ
