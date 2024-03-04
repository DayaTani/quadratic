import Printer from '../../types/printer'
import { QuadraticError } from '../../errors'

const handleError = (error: unknown, errPrinter: Printer): void => {
  if (!(error instanceof QuadraticError)) {
    throw error
  }

  errPrinter(error.message)
}

export default handleError
