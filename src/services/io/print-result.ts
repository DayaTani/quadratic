import FindResult from '../../types/find-result'
import { Writable } from 'stream'

const printResult = async (findResult: FindResult, output: Writable): Promise<void> => {
  if (!findResult.success) {
    await write(output, '\n')
    return
  }

  const rootPack = findResult.rootPack
  await write(output, `${rootPack.r1}\t${rootPack.r2}\n`)
}

const write = async (output: Writable, message: string): Promise<void> => {
  const promiseFunc = (resolve: (value: unknown) => void, reject: (reason?: unknown) => void): void => {
    output.write(message, (error: unknown) => {
      /* istanbul ignore next */
      if (error) {
        reject(error)
        return
      }

      resolve('')
    })
  }

  await new Promise(promiseFunc)
}

export default printResult
