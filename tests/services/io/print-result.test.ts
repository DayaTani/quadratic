import FindResult from '../../../src/types/find-result'
import printResult from '../../../src/services/io/print-result'

describe('printResult', () => {
  it('prints RootPack as TSV if success', () => {
    // Prepare
    const findResult: FindResult = {
      success: true,
      rootPack: { r1: 0.567, r2: -986 },
    }

    const outPrinter = jest.fn()

    // Execute
    printResult(findResult, outPrinter)

    // Assert
    expect(outPrinter).toHaveBeenCalledTimes(1)
    expect(outPrinter).toHaveBeenCalledWith('0.567\t-986')
  })

  it('prints empty string if not success', () => {
    // Printer
    const outPrinter = jest.fn()

    // Execute
    printResult({ success: false }, outPrinter)

    // Assert
    expect(outPrinter).toHaveBeenCalledTimes(1)
    expect(outPrinter).toHaveBeenCalledWith('')
  })
})
