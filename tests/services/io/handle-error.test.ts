import { QuadraticError } from '../../../src/errors'
import fs from 'fs'
import handleError from '../../../src/services/io/handle-error'
import os from 'os'

describe('handleError', () => {
  const filePath = `${os.tmpdir()}/handle-error`

  it('prints error if the error is QuadraticError', () => {
    // Prepare
    const error = new QuadraticError('some error')

    // Execute
    handleError(error, fs.createWriteStream(filePath))

    // Assert
    expect(fs.readFileSync(filePath, { encoding: 'utf8' })).toBe('some error\n')

    fs.rmSync(filePath)
  })

  it('throws the error if the error is not QuadraticError', () => {
    // Prepare
    const error = new Error('other error')

    // Execute & assert
    expect(() => handleError(error, fs.createWriteStream(filePath))).toThrow('other error')

    expect(fs.existsSync(filePath)).toBe(false)
  })
})
