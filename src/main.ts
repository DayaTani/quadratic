import { Readable, Writable } from 'stream'
import handleError from './services/io/handle-error'
import processLine from './services/process-line'
import readline from 'readline'

/**
 * The main function of the CLI application.
 * Reads input from a Readable stream, processes each line, and writes output to a Writable stream.
 * @param input - The input stream to read from.
 * @param output - The output stream to write processed data to.
 * @param errorStream - The stream to write error messages to.
 * @returns A promise that resolves once the application is finished running.
 */
const main = async (input: Readable, output: Writable, errorStream: Writable): Promise<void> => {
  try {
    /** Interface for reading lines from input stream. */
    const rl = readline.createInterface({ input, crlfDelay: Infinity })

    for await (const line of rl) {
      await processLine(line, output)
    }
  } catch (error) {
    await handleError(error, errorStream)
  }
}

export default main
