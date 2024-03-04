import FindResult from '../../types/find-result'
import Printer from '../../types/printer'

const printResult = (findResult: FindResult, outPrinter: Printer): void => {
  if (!findResult.success) {
    outPrinter('')
    return
  }

  const rootPack = findResult.rootPack
  outPrinter(`${rootPack.r1}\t${rootPack.r2}`)
}

export default printResult
