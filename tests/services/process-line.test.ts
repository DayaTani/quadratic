import * as findRootPackModule from '../../src/services/find-root-pack'
import * as handleErrorModule from '../../src/services/io/handle-error'
import * as parseArgumentsModule from '../../src/services/io/parse-arguments'
import * as printResultModule from '../../src/services/io/print-result'
import processLine from '../../src/services/process-line'

describe('main', () => {
  const line = '7\t2\t4'
  const outPrinter = jest.fn()

  let parseArgumentSpy: jest.SpyInstance
  let findRootPackSpy: jest.SpyInstance
  let printResultSpy: jest.SpyInstance
  let handleErrorSpy: jest.SpyInstance

  beforeEach(() => {
    parseArgumentSpy = jest.spyOn(parseArgumentsModule, 'default')
    findRootPackSpy = jest.spyOn(findRootPackModule, 'default')
    printResultSpy = jest.spyOn(printResultModule, 'default')
    handleErrorSpy = jest.spyOn(handleErrorModule, 'default')
  })

  afterEach(() => {
    parseArgumentSpy.mockRestore()
    findRootPackSpy.mockRestore()
    printResultSpy.mockRestore()
    handleErrorSpy.mockRestore()
  })

  it('finds root of a quadratic equation', () => {
    // Prepare
    const coefficientPack = { a: 1, b: 2, c: 3 }
    parseArgumentSpy.mockReturnValue(coefficientPack)

    const findResult = { success: true, rootPack: { r1: -9, r2: 5.6 } }
    findRootPackSpy.mockReturnValue(findResult)

    // Execute
    processLine(line, outPrinter)

    // Assert
    expect(parseArgumentSpy).toHaveBeenCalledTimes(1)
    expect(parseArgumentSpy).toHaveBeenCalledWith('7\t2\t4')

    expect(findRootPackSpy).toHaveBeenCalledTimes(1)
    expect(findRootPackSpy).toHaveBeenCalledWith(coefficientPack)

    expect(printResultSpy).toHaveBeenCalledTimes(1)
    expect(printResultSpy).toHaveBeenCalledWith(findResult, outPrinter)

    expect(handleErrorSpy).not.toHaveBeenCalled()
  })

})