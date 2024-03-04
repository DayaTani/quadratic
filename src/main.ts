import Printer from './types/printer'
import { Readable } from 'stream'
import handleError from './services/io/handle-error'
import processLine from './services/process-line'
import readline from 'readline'

const main = async (input: Readable, outPrinter: Printer, errPrinter: Printer): Promise<void> => {
  try {
    const rl = readline.createInterface({ input, crlfDelay: Infinity })
    for await (const line of rl) {
      processLine(line, outPrinter)
    }
  } catch (error) {
    handleError(error, errPrinter)
  }
}

export default main
