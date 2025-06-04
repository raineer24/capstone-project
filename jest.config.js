/** @type {import('jest').Config} */
export default {
  verbose: true,
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', './setupTests.js'], // Add polyfills here
};