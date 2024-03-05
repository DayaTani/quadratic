import * as findRootPackModule from '../../src/services/find-root-pack'
import * as parseLineModule from '../../src/services/io/parse-line'
import * as printResultModule from '../../src/services/io/print-result'
import fs from 'fs'
import os from 'os'
import processLine from '../../src/services/process-line'

describe('processLine', () => {
  it('finds root of a quadratic equation', async () => {
    // Prepare
    const line = '7\t2\t4'

    const parseLineSpy = jest.spyOn(parseLineModule, 'default')
    const findRootPackSpy = jest.spyOn(findRootPackModule, 'default')
    const printResultSpy = jest.spyOn(printResultModule, 'default')

    const coefficientPack = { a: 1, b: 2, c: 3 }
    parseLineSpy.mockReturnValue(coefficientPack)

    const findResult = { success: true, rootPack: { r1: -9, r2: 5.6 } }
    findRootPackSpy.mockReturnValue(findResult)

    printResultSpy.mockResolvedValue()

    const stream = fs.createWriteStream(`${os.tmpdir()}/process-line`)

    // Execute
    await processLine(line, stream)

    // Assert
    expect(parseLineSpy).toHaveBeenCalledTimes(1)
    expect(parseLineSpy).toHaveBeenCalledWith('7\t2\t4')

    expect(findRootPackSpy).toHaveBeenCalledTimes(1)
    expect(findRootPackSpy).toHaveBeenCalledWith(coefficientPack)

    expect(printResultSpy).toHaveBeenCalledTimes(1)
    expect(printResultSpy).toHaveBeenCalledWith(findResult, stream)

    // Cleanup
    parseLineSpy.mockRestore()
    findRootPackSpy.mockRestore()
    printResultSpy.mockRestore()
  })

})
