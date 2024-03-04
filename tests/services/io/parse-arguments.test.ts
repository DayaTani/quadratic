import { QuadraticError } from '../../../src/errors'
import parseArguments from '../../../src/services/io/parse-arguments'

describe('parseArguments', () => {
  it('parses line and returns coefficient pack', () => {
    // Prepare
    const line = '123\t-0.54\t6.73'

    // Execute
    const coefficientPack = parseArguments(line)

    // Assert
    expect(coefficientPack).toStrictEqual({
      a: 123,
      b: -0.54,
      c: 6.73,
    })
  })

  it.each([
    [''],
    ['123'],
    ['123\t556'],
  ])('throws error if provided coefficients are not enough', line => {
    expect(() => parseArguments(line)).toThrow(QuadraticError)
  })

  it.each([
    ['daniel\t456\t789'],
    ['123\ttan\t789'],
    ['123\t456\tkdjfbgds'],
  ])('throws error if arguments cannot be parsed', line => {
    expect(() => parseArguments(line)).toThrow(QuadraticError)
  })
})
