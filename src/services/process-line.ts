import { Writable } from 'stream'
import findRootPack from './find-root-pack'
import parseArguments from './io/parse-arguments'
import printResult from './io/print-result'

const processLine = async (line: string, output: Writable): Promise<void> => {
  const coefficentPack = parseArguments(line)

  const findResult = findRootPack(coefficentPack)

  await printResult(findResult, output)
}

export default processLine
