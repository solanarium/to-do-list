import { mapArrToString } from './mapArrToString'

describe('mapArrToString', () => {
  test('Correct Value', () => {
    expect(mapArrToString([1, 2, 3])).toEqual(['1', '2', '3'])
  })
  test('Мішанина', () => {
    expect(mapArrToString([1, 2, 3, null, undefined, 'asfasd'])).toEqual([
      '1',
      '2',
      '3',
    ])
  })
  test('Empty array', () => {
    expect(mapArrToString([])).toEqual([])
  })
  test('NotEqual', () => {
    expect(mapArrToString([1, 2, 3])).not.toEqual(['1', '2', '3', '4'])
  })
})
