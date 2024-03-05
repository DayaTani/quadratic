import CoefficientPack from '../types/coefficient-pack'
import FindResult from '../types/find-result'
import RootPack from '../types/root-pack'

/**
 * Represents the dividend values used in the quadratic formula.
 * The dividend is the value to be divided by the divisor in the quadratic formula.
 */
interface DividendPack {
  /** The first dividend. */
  d1: number

  /** The second dividend. */
  d2: number
}

/**
 * Finds the roots of a quadratic equation using the coefficients provided.
 * @param coefficientPack - The coefficients of the quadratic equation.
 * @returns The result of finding the roots.
 */
const findRootPack = (coefficientPack: CoefficientPack): FindResult => {
  /** Dividend values for the quadratic formula. */
  const dividendPack = findDividendPack(coefficientPack)
  if (dividendPack === null) {
    return { success: false }
  }

  /** The divisor used in the quadratic formula. */
  const divisor = 2 * coefficientPack.a

  /** The calculated roots of the quadratic equation. */
  const rootPack: RootPack = {
    r1: dividendPack.d1 / divisor,
    r2: dividendPack.d2 / divisor,
  }

  return { success: true, rootPack }
}

/**
 * Finds the dividend values used in the quadratic formula.
 * The dividend is the upper term in the division of the quadratic formula.
 * @param coefficientPack - The coefficients of the quadratic equation.
 * @returns The dividend values, or null if the discriminant is negative.
 */
const findDividendPack = (coefficientPack: CoefficientPack): DividendPack | null => {
  /** The first term of the dividend. */
  const firstTerm = -coefficientPack.b

  /** The discriminant of the quadratic equation. */
  const discriminant = findDiscriminant(coefficientPack)
  if (discriminant < 0) {
    return null
  }

  /** The calculated second term of the dividend. */
  const secondTerm = Math.sqrt(discriminant)

  return {
    d1: firstTerm + secondTerm,
    d2: firstTerm - secondTerm,
  }
}

/**
 * Calculates the discriminant of a quadratic equation.
 * @param coefficientPack - The coefficients of the quadratic equation.
 * @returns The discriminant.
 */
const findDiscriminant = (coefficientPack: CoefficientPack): number => {
  /** The first term of the discriminant. */
  const firstTerm = coefficientPack.b * coefficientPack.b

  /** The second term of the discriminant. */
  const secondTerm = 4 * coefficientPack.a * coefficientPack.c

  return firstTerm - secondTerm
}

export default findRootPack
