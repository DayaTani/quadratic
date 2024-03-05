import { QuadraticError } from '../../../src/errors'
import parseLine from '../../../src/services/io/parse-line'

describe('parseLine', () => {
  it('parses line and returns coefficient pack', () => {
    // Prepare
    const line = '123\t-0.54\t6.73'

    // Execute
    const coefficientPack = parseLine(line)

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
    expect(() => parseLine(line)).toThrow(QuadraticError)
  })

  it.each([
    ['daniel\t456\t789'],
    ['123\ttan\t789'],
    ['123\t456\tkdjfbgds'],
  ])('throws error if arguments cannot be parsed', line => {
    expect(() => parseLine(line)).toThrow(QuadraticError)
  })
})
