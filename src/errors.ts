export class QuadraticError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'QuadraticError'
  }
}
