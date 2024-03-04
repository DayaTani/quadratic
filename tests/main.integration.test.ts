import main from '../src/main'

describe('quadratic CLI tool', () => {
  const firstTwoArgs = ['node', './dist/index.js']

  it.each([
    [['1', '-5', '6'], '3\t2'],
    [['2', '3', '-5'], '1\t-2.5'],
    [['1', '6', '9'], '-3\t-3'],
  ])('finds roots of quadratic quations', (restArgs, expected) => {
    // Prepare
    const args = [...firstTwoArgs, ...restArgs]
    const outPrinter = jest.fn()
    const errPrinter = jest.fn()

    // Execute
    main(args, outPrinter, errPrinter)

    // Assert
    expect(outPrinter).toHaveBeenCalledTimes(1)
    expect(outPrinter).toHaveBeenCalledWith(expected)

  })
})
