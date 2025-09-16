import { classNames } from '../helpers/classNames'

describe('Unit | Helpers | classNames', () => {
  test('it returns correct classes', () => {
    expect(classNames('icon', 'cars', 'styles')).toBe('icon cars styles')
  })
  test('i', () => {
    expect(classNames('icon', false, 'cars', null, 'square', undefined)).toBe(
      'icon cars square',
    )
  })
})
