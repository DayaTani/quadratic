import { QuadraticError } from '../../errors'
import { Writable } from 'stream'

const handleError = (error: unknown, errorStream: Writable): void => {
  if (!(error instanceof QuadraticError)) {
    throw error
  }

  errorStream.write(error.message + '\n')
}

export default handleError
