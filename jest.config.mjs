import { createDefaultPreset } from 'ts-jest'

/** @type {import("jest").Config} **/

const tsJestTransformCfg = createDefaultPreset().transform

export default {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  transform: {
    ...tsJestTransformCfg,
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json', // або tsconfig.jest.json
      useESM: true,
    },
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'], // щоб ts-jest обробляв TS як ESM
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
