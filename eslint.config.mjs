import nextConfig from 'eslint-config-next';

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ['out/*', '.next/*', '.idea/*', 'node_modules/*', 'coverage/*'],
  },
];

export default eslintConfig;
