import { QuadraticError } from '../../errors'
import { Writable } from 'stream'
import writeln from './writeln'

/**
 * Handles errors that occur during the execution of the application.
 * If the error is an instance of QuadraticError, writes the error message to the error stream.
 * Otherwise, rethrows the error.
 * @param error - The error to handle.
 * @param errorStream - The stream to write error messages to.
 * @returns A promise that resolves once the error is handled.
 */
const handleError = async (error: unknown, errorStream: Writable): Promise<void> => {
  if (!(error instanceof QuadraticError)) {
    throw error
  }

  await writeln(error.message, errorStream)
}

export default handleError
