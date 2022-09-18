const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  collectCoverageFrom: ['**/*.{ts,tsx}', '!**/stories.tsx', '!**/*.mock.ts', '!src/pages/*.tsx', '!src/styles/*.ts']
}

module.exports = createJestConfig(customJestConfig)