import { square } from './square'

describe('Unit | test | square', () => {
  test('it returns correct result', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')

    square(2)

    expect(spyMathPow).toHaveBeenCalledTimes(1)
  })
  test('it does not call MathPow if number is one', () => {
    const spyMathPow = jest.spyOn(Math, 'pow')

    square(1)

    expect(spyMathPow).not.toHaveBeenCalled()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })
})
