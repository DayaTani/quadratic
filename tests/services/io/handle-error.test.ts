import { QuadraticError } from '../../../src/errors'
import fs from 'fs'
import handleError from '../../../src/services/io/handle-error'
import os from 'os'

describe('handleError', () => {
  const filePath = `${os.tmpdir()}/handle-error`

  it('prints error if the error is QuadraticError', async () => {
    // Prepare
    const error = new QuadraticError('some error')

    // Execute
    await handleError(error, fs.createWriteStream(filePath))

    // Assert
    expect(fs.readFileSync(filePath, { encoding: 'utf8' })).toBe('some error\n')

    fs.rmSync(filePath)
  })

  it('throws the error isntance if it is not QuadraticError', async () => {
    // Prepare
    const error = new Error('other error')

    // Execute & assert
    await expect(handleError(error, fs.createWriteStream(filePath))).rejects.toThrow('other error')

    expect(fs.existsSync(filePath)).toBe(false)
  })
})
