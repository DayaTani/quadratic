import { Readable, Writable } from 'stream'
import handleError from './services/io/handle-error'
import processLine from './services/process-line'
import readline from 'readline'

const main = async (input: Readable, output: Writable, errorStream: Writable): Promise<void> => {
  try {
    const rl = readline.createInterface({ input, crlfDelay: Infinity })
    for await (const line of rl) {
      await processLine(line, output)
    }
  } catch (error) {
    handleError(error, errorStream)
  }
}

export default main
