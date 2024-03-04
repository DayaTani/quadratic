import CoefficientPack from '../types/coefficient-pack'
import FindResult from '../types/find-result'
import RootPack from '../types/root-pack'

interface DividendPack {
  d1: number
  d2: number
}

const findRootPack = (coefficientPack: CoefficientPack): FindResult => {
  const dividendPack = findDividendPack(coefficientPack)
  if (dividendPack === null) {
    return { success: false }
  }

  const divisor = 2 * coefficientPack.a

  const rootPack: RootPack = {
    r1: dividendPack.d1 / divisor,
    r2: dividendPack.d2 / divisor,
  }

  return { success: true, rootPack }
}

const findDividendPack = (coefficientPack: CoefficientPack): DividendPack | null => {
  const firstTerm = -coefficientPack.b

  const discriminant = findDiscriminant(coefficientPack)
  if (discriminant < 0) {
    return null
  }

  const secondTerm = Math.sqrt(discriminant)

  return {
    d1: firstTerm + secondTerm,
    d2: firstTerm - secondTerm,
  }
}

const findDiscriminant = (coefficientPack: CoefficientPack): number => {
  const firstTerm = coefficientPack.b * coefficientPack.b

  const secondTerm = 4 * coefficientPack.a * coefficientPack.c

  return firstTerm - secondTerm
}

export default findRootPack
