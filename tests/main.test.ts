import * as handleErrorModule from '../src/services/io/handle-error'
import * as processLineModule from '../src/services/process-line'
import fs from 'fs'
import main from '../src/main'
import os from 'os'

describe('main', () => {
  const inFilePath = `${os.tmpdir()}/quadratic-test-in`
  const content = '7\t2\t4\n'
      + '1\t6\t9\n'
      + 'daniel\ttan\tfriska\n'
  const outFilePath = `${os.tmpdir()}/quadratic-test-out`
  const errFilePath = `${os.tmpdir()}/quadratic-test-err`

  let processLineSpy: jest.SpyInstance
  let handleErrorSpy: jest.SpyInstance

  beforeEach(() => {
    processLineSpy = jest.spyOn(processLineModule, 'default')
    handleErrorSpy = jest.spyOn(handleErrorModule, 'default')

    fs.writeFileSync(inFilePath, content)
  })

  afterEach(() => {
    processLineSpy.mockRestore()
    handleErrorSpy.mockRestore()

    fs.rmSync(inFilePath)
    if (fs.existsSync(outFilePath)) {
      fs.rmSync(outFilePath)
    }
    if (fs.existsSync(errFilePath)) {
      fs.rmSync(errFilePath)
    }
  })

  it('finds root of a quadratic equation', async () => {
    // Prepare
    processLineSpy.mockImplementation(() => {})

    const outStream = fs.createWriteStream(outFilePath)
    const errStream = fs.createWriteStream(errFilePath)

    // Execute
    await main(fs.createReadStream(inFilePath), outStream, errStream)

    // Assert
    expect(processLineSpy).toHaveBeenCalledTimes(3)
    expect(processLineSpy).toHaveBeenNthCalledWith(1, '7\t2\t4', outStream)
    expect(processLineSpy).toHaveBeenNthCalledWith(2, '1\t6\t9', outStream)
    expect(processLineSpy).toHaveBeenNthCalledWith(3, 'daniel\ttan\tfriska', outStream)

    expect(handleErrorSpy).not.toHaveBeenCalled()
  })

  it('handles thrown error', async () => {
    // Prepare
    const error = new Error('ada error')
    processLineSpy.mockImplementation(() => { throw error })

    handleErrorSpy.mockImplementation(() => {})

    const outStream = fs.createWriteStream(outFilePath)
    const errStream = fs.createWriteStream(errFilePath)

    // Execute
    await main(fs.createReadStream(inFilePath), outStream, errStream)

    // Assert
    expect(processLineSpy).toHaveBeenCalledTimes(1)
    expect(processLineSpy).toHaveBeenCalledWith('7\t2\t4', outStream)

    expect(handleErrorSpy).toHaveBeenCalledTimes(1)
    expect(handleErrorSpy).toHaveBeenCalledWith(error, errStream)
  })
})
