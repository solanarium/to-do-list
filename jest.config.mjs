import { createDefaultPreset } from 'ts-jest'

/** @type {import("jest").Config} **/

const tsJestTransformCfg = createDefaultPreset().transform

export default {
  testEnvironment: 'node',
  transform: {
    ...tsJestTransformCfg,
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts'], // щоб ts-jest обробляв TS як ESM
  // globals: {
  //   'ts-jest': {
  //     useESM: true,
  //   },
  // },
  // moduleNameMapper: {
  //   '^(\\.{1,2}/.*)\\.js$': '$1', // щоб імпорти без розширення не ламалися
  // },
}
