import fs from 'fs'
import main from '../src/main'
import os from 'os'

describe('quadratic CLI tool', () => {
  it('finds roots of quadratic quations', async () => {
    // Prepare
    const filePath = `${os.tmpdir()}/quadratic-test`
    const content = '1\t-5\t6\n'
      + '2\t3\t-5\n'
      + '2\t4\t5\n'
      + '1\t6\t9\n'
    fs.writeFileSync(filePath, content)

    const outPrinter = jest.fn()
    const errPrinter = jest.fn()

    // Execute
    await main(fs.createReadStream(filePath), outPrinter, errPrinter)

    // Assert
    expect(outPrinter).toHaveBeenCalledTimes(4)
    expect(outPrinter).toHaveBeenNthCalledWith(1, '3\t2')
    expect(outPrinter).toHaveBeenNthCalledWith(2, '1\t-2.5')
    expect(outPrinter).toHaveBeenNthCalledWith(3, '')
    expect(outPrinter).toHaveBeenNthCalledWith(4, '-3\t-3')
  })
})
