import fs from 'fs'
import main from '../src/main'
import os from 'os'

describe('quadratic CLI tool', () => {
  it('finds roots of quadratic quations', async () => {
    // Prepare
    const inFilePath = `${os.tmpdir()}/quadratic-test-in`
    const content = '1\t-5\t6\n'
      + '2\t3\t-5\n'
      + '2\t4\t5\n'
      + '1\t6\t9\n'
    fs.writeFileSync(inFilePath, content)

    const outFilePath = `${os.tmpdir()}/quadratic-test-out`
    const errFilePath = `${os.tmpdir()}/quadratic-test-err`

    // Execute
    await main(
      fs.createReadStream(inFilePath),
      fs.createWriteStream(outFilePath),
      fs.createWriteStream(errFilePath),
    )

    // Assert
    expect(process.exitCode).toBe(undefined)

    const expectedContent = '3\t2\n'
      + '1\t-2.5\n'
      + '\n'
      + '-3\t-3\n'

    expect(fs.readFileSync(outFilePath, { encoding: 'utf8' })).toBe(expectedContent)

    // Cleanup
    fs.rmSync(outFilePath)
    if (fs.existsSync(errFilePath)) {
      fs.rmSync(errFilePath)
    }
  })
})
