/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!config/jest/cssTransform.js',
    '!out/**',
    '!.next/**',
    '!.idea/**',
    '!coverage/**',
    '!.github/**',
    '.prettierrc.js',
    'jest.config.js',
  ],
  preset: 'ts-jest',
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/test/tsconfig.jest.json',
      },
    ],
    '^.+\\.(css|scss)$': '<rootDir>/config/jest/cssTransform.js',
  },
};
