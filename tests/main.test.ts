import * as handleErrorModule from '../src/services/io/handle-error'
import * as processLineModule from '../src/services/process-line'
import fs from 'fs'
import main from '../src/main'
import os from 'os'

describe('main', () => {
  const filePath = `${os.tmpdir()}/quadratic-test`
  const content = '7\t2\t4\n'
      + '1\t6\t9\n'
      + 'daniel\ttan\tfriska\n'
  const outPrinter = jest.fn()
  const errPrinter = jest.fn()

  let processLineSpy: jest.SpyInstance
  let handleErrorSpy: jest.SpyInstance

  beforeEach(() => {
    processLineSpy = jest.spyOn(processLineModule, 'default')
    handleErrorSpy = jest.spyOn(handleErrorModule, 'default')

    fs.writeFileSync(filePath, content)
  })

  afterEach(() => {
    processLineSpy.mockRestore()
    handleErrorSpy.mockRestore()

    fs.rmSync(filePath)
  })

  it('finds root of a quadratic equation', async () => {
    // Prepare
    processLineSpy.mockImplementation(() => {})

    // Execute
    await main(fs.createReadStream(filePath), outPrinter, errPrinter)

    // Assert
    expect(processLineSpy).toHaveBeenCalledTimes(3)
    expect(processLineSpy).toHaveBeenNthCalledWith(1, '7\t2\t4', outPrinter)
    expect(processLineSpy).toHaveBeenNthCalledWith(2, '1\t6\t9', outPrinter)
    expect(processLineSpy).toHaveBeenNthCalledWith(3, 'daniel\ttan\tfriska', outPrinter)

    expect(handleErrorSpy).not.toHaveBeenCalled()
  })

  it('handles thrown error', async () => {
    // Prepare
    const error = new Error('ada error')
    processLineSpy.mockImplementation(() => { throw error })

    handleErrorSpy.mockImplementation(() => {})

    // Execute
    await main(fs.createReadStream(filePath), outPrinter, errPrinter)

    // Assert
    expect(processLineSpy).toHaveBeenCalledTimes(1)
    expect(processLineSpy).toHaveBeenCalledWith('7\t2\t4', outPrinter)

    expect(handleErrorSpy).toHaveBeenCalledTimes(1)
    expect(handleErrorSpy).toHaveBeenCalledWith(error, errPrinter)
  })
})
