/* eslint-disable github/unescaped-html-literal */
export default {
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testEnvironment: 'jsdom',
  cacheDirectory: '.test',
  collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/stories/**', '!**/*.stories.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: [
    '<rootDir>/src/utils/test-matchers.tsx',
    '<rootDir>/src/utils/test-deprecations.tsx',
    '<rootDir>/src/utils/test-helpers.tsx'
  ],
  testMatch: ['<rootDir>/(src|codemods)/**/Select.test.[jt]s?(x)'],
  // testMatch: ['<rootDir>/(src|codemods)/**/*.test.[jt]s?(x)', '!**/*.types.test.[jt]s?(x)'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest']
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(t|j)sx?$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname']
}
