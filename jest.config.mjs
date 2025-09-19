/** @type {import("jest").Config} **/
export default {
  rootDir: '.',
  testEnvironment: 'jest-fixed-jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      { tsconfig: './tsconfig.tests.json', useESM: true },
    ],
  },
  transformIgnorePatterns: ['/node_modules/(?!(identity-obj-proxy)/)'],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
