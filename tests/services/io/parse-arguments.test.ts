import { QuadraticError } from '../../../src/errors'
import parseArguments from '../../../src/services/io/parse-arguments'

describe('parseArguments', () => {
  const firstTwoArgs = ['node', './dist/index.js']

  it('parses command-line arguments and returns coefficient pack', () => {
    // Prepare
    const args = [...firstTwoArgs, '123', '-0.54', '6.73']

    // Execute
    const coefficientPack = parseArguments(args)

    // Assert
    expect(coefficientPack).toStrictEqual({
      a: 123,
      b: -0.54,
      c: 6.73,
    })
  })

  it.each([
    [[]],
    [['123']],
    [['123', '556']],
  ])('throws error if provided arguments is not enough', restArgs => {
    // Prepare
    const args = [...firstTwoArgs, ...restArgs]

    // Execute & assert
    expect(() => parseArguments(args)).toThrow(QuadraticError)
  })

  it.each([
    [['daniel', '456', '789']],
    [['123', 'tan', '789']],
    [['123', '456', 'kdjfbgds']],
  ])('throws error if arguments cannot be parsed', restArgs => {
    // Prepare
    const args = [...firstTwoArgs, ...restArgs]

    // Execute & assert
    expect(() => parseArguments(args)).toThrow(QuadraticError)
  })
})
