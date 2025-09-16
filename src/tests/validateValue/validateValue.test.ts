import { validateValue } from './validateValue'

test('Validation value', () => {
  expect(validateValue(50)).toBe(true)
})

describe('Validation value', () => {
  test('Correct value', () => {
    expect(validateValue(50)).toBe(true)
  })
  test('Less value', () => {
    expect(validateValue(-1)).toBe(false)
  })
  test('More value', () => {
    expect(validateValue(101)).toBe(false)
  })
  test('Top border value', () => {
    expect(validateValue(100)).toBe(true)
  })
  test('Bottom border value', () => {
    expect(validateValue(0)).toBe(true)
  })
})
