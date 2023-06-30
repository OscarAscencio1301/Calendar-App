export default {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    '\\.(css|scss)$': '<rootDir>/test/mocks/styleMock.ts',
  },
  transformIgnorePatterns: [],
  setupFiles: ['./jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
}