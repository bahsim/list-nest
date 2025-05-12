module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testMatch: ['**/*.spec.tsx', '**/*.test.tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@ui-kit/(.*)$': '<rootDir>/ui-kit/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
}; 