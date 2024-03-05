import { QuadraticError } from '../../errors'
import { Writable } from 'stream'
import write from './write'

const handleError = async (error: unknown, errorStream: Writable): Promise<void> => {
  if (!(error instanceof QuadraticError)) {
    throw error
  }

  await write(errorStream, `${error.message}\n`)
}

export default handleError
