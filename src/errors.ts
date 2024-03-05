/** Represents a custom error of the application. */
export class QuadraticError extends Error {
  /**
   * Creates an instance of QuadraticError.
   * @param message - The error message.
   */
  constructor(message: string) {
    super(message)
    this.name = 'QuadraticError'
  }
}
