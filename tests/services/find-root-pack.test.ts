import { FindSuccessResult } from '../../src/types/find-result'
import findRootPack from '../../src/services/find-root-pack'

describe('findRootPack', () => {
  it.each([
    [{ a: 1, b: -5, c: 6 }, { r1: 3, r2: 2 }],
    [{ a: 2, b: 3, c: -5 }, { r1: 1, r2: -5/2 }],
    [{ a: 1, b: -4, c: 4 }, { r1: 2, r2: 2 }],
    [{ a: 3, b: 1, c: -2 }, { r1: 2/3, r2: -1 }],
    [{ a: 1, b: 6, c: 9 }, { r1: -3, r2: -3 }],
  ])('finds RootPack given a CoefficientPack', (coefficientPack, rootPack) => {
    // Execute
    const result = findRootPack(coefficientPack)

    // Assert
    expect(result.success).toBe(true)

    expect((result as FindSuccessResult).rootPack).toStrictEqual(rootPack)
  })

  it.each([
    [{ a: 1, b: 1, c: 1 }],
    [{ a: 2, b: 4, c: 5 }],
    [{ a: 3, b: 6, c: 10 }],
  ])('returns success false if equation cannot be solved', coefficientPack => {
    // Execute
    const result = findRootPack(coefficientPack)

    // Assert
    expect(result.success).toBe(false)
  })
})
