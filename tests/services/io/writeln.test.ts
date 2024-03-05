import fs from 'fs'
import os from 'os'
import writeln from '../../../src/services/io/writeln'

describe('writeln', () => {
  it('should write the message followed by a newline character to the writable stream', async () => {
    // Prepare
    const filePath = `${os.tmpdir()}/test-file.txt`
    const message = 'Hello, world!'

    // Execute
    await writeln(message, fs.createWriteStream(filePath))

    // Assert
    const content = fs.readFileSync(filePath, { encoding: 'utf8' })
    expect(content).toEqual('Hello, world!\n')

    // Cleanup
    fs.rmSync(filePath)
  })
})
