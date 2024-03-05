import CoefficientPack from '../../types/coefficient-pack'
import { QuadraticError } from '../../errors'

/**
 * Parses a string containing coefficients of a quadratic equation and returns a CoefficientPack.
 * @param line - The string containing coefficients separated by tabs.
 * @returns The coefficients parsed from the input string.
 * @throws {QuadraticError} - Throws an error if the input string does not contain enough coefficients
 *  or if the coefficients are invalid.
 */
const parseLine = (line: string): CoefficientPack => {
  /** An array containing coefficients split from the input string. */
  const coefficients = line.split('\t')

  if (coefficients.length < 3) {
    throw new QuadraticError('Insufficient number of coefficients provided')
  }

  /** The coefficient of the quadratic term. */
  const a = parseFloat(coefficients[0])

  /** The coefficient of the linear term. */
  const b = parseFloat(coefficients[1])

  /** The constant term. */
  const c = parseFloat(coefficients[2])

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new QuadraticError('Invalid coefficients provided. Please provide valid numerical coefficients.')
  }

  return { a, b, c }
}

export default parseLine
