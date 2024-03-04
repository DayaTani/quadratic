import Printer from '../types/printer'
import findRootPack from './find-root-pack'
import parseArguments from './io/parse-arguments'
import printResult from './io/print-result'

const processLine = (line: string, outPrinter: Printer): void => {
  const coefficentPack = parseArguments(line)

  const findResult = findRootPack(coefficentPack)

  printResult(findResult, outPrinter)
}

export default processLine
