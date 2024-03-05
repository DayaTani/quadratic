import { Writable } from 'stream'
import findRootPack from './find-root-pack'
import parseLine from './io/parse-line'
import printResult from './io/print-result'

/**
 * Processes a single line of input.
 * Parses the coefficients from the input line, finds the roots of the quadratic equation,
 * and prints the result to the output stream.
 * @param line - The input line containing coefficients of a quadratic equation.
 * @param output - The output stream to print the result to.
 * @returns A promise that resolves once the processing is complete.
 */
const processLine = async (line: string, output: Writable): Promise<void> => {
  /** The coefficients parsed from the input line. */
  const coefficientPack = parseLine(line)

  /** The result of finding the roots of the quadratic equation. */
  const findResult = findRootPack(coefficientPack)

  await printResult(findResult, output)
}

export default processLine
