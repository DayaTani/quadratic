import FindResult from '../../types/find-result'
import { Writable } from 'stream'
import write from './write'

/**
 * Prints the result of finding roots of a quadratic equation to the output stream.
 * @param findResult - The result of finding roots of the quadratic equation.
 * @param output - The output stream to print the result to.
 * @returns A promise that resolves once the result is printed.
 */
const printResult = async (findResult: FindResult, output: Writable): Promise<void> => {
  if (!findResult.success) {
    await write(output, '\n')
    return
  }

  /** The RootPack extracted from the successful FindResult. */
  const rootPack = findResult.rootPack

  await write(output, `${rootPack.r1}\t${rootPack.r2}\n`)
}

export default printResult
