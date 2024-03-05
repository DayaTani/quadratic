import FindResult from '../../types/find-result'
import { Writable } from 'stream'
import write from './write'

const printResult = async (findResult: FindResult, output: Writable): Promise<void> => {
  if (!findResult.success) {
    await write(output, '\n')
    return
  }

  const rootPack = findResult.rootPack
  await write(output, `${rootPack.r1}\t${rootPack.r2}\n`)
}

export default printResult
