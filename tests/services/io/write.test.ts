import fs from 'fs'
import os from 'os'
import write from '../../../src/services/io/write'

describe('write', () => {
  it('should write message to a writable stream without error', async () => {
    // Prepare
    const filePath = `${os.tmpdir()}/test-file.txt`
    const message = 'Hello, world!'

    // Execute
    await write(fs.createWriteStream(filePath), message)

    // Assert
    const content = fs.readFileSync(filePath, { encoding: 'utf8' })
    expect(content).toEqual('Hello, world!')
  })
})
