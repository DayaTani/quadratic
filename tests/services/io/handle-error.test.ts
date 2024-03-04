import { QuadraticError } from '../../../src/errors'
import handleError from '../../../src/services/io/handle-error'

describe('handleError', () => {
  it('prints error if the error is QuadraticError', () => {
    // Prepare
    const error = new QuadraticError('some error')

    const errPrinter = jest.fn()

    // Execute
    handleError(error, errPrinter)

    // Assert
    expect(errPrinter).toHaveBeenCalledTimes(1)
    expect(errPrinter).toHaveBeenCalledWith('some error')
  })

  it('throws the error if the error is not QuadraticError', () => {
    // Prepare
    const error = new Error('other error')

    const errPrinter = jest.fn()

    // Execute & assert
    expect(() => handleError(error, errPrinter)).toThrow('other error')

    expect(errPrinter).not.toHaveBeenCalled()
  })
})
