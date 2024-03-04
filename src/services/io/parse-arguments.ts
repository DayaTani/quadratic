import CoefficientPack from '../../types/coefficient-pack'
import { QuadraticError } from '../../errors'

const parseArguments = (args: string[]): CoefficientPack => {
  if (args.length < 5) {
    throw new QuadraticError('kurang oi')
  }

  const a = parseFloat(args[2])
  const b = parseFloat(args[3])
  const c = parseFloat(args[4])

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    throw new QuadraticError('yang bener masukinnya!')
  }

  return { a, b, c }
}

export default parseArguments
