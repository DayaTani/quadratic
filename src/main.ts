import Printer from './types/printer'
import findRootPack from './services/find-root-pack'
import handleError from './services/io/handle-error'
import parseArguments from './services/io/parse-arguments'
import printResult from './services/io/print-result'

const main = (args: string[], outPrinter: Printer, errPrinter: Printer): void => {
  try {
    const coefficentPack = parseArguments(args)

    const findResult = findRootPack(coefficentPack)

    printResult(findResult, outPrinter)
  } catch (error) {
    handleError(error, errPrinter)
  }
}

export default main
