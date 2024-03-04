import CoefficientPack from '../../types/coefficient-pack'
import { QuadraticError } from '../../errors'

const parseArguments = (line: string): CoefficientPack => {
  const coefficients = line.split('\t')
  if (coefficients.length < 3) {
    throw new QuadraticError('kurang oi')
  }

  const a = parseFloat(coefficients[0])
  const b = parseFloat(coefficients[1])
  const c = parseFloat(coefficients[2])

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new QuadraticError('yang bener masukinnya!')
  }

  return { a, b, c }
}

export default parseArguments
