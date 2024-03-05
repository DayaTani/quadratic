import FindResult from '../../../src/types/find-result'
import fs from 'fs'
import os from 'os'
import printResult from '../../../src/services/io/print-result'

describe('printResult', () => {
  const filePath = `${os.tmpdir()}/print-result.tsv`

  afterEach(() => {
    fs.rmSync(filePath)
  })

  it('prints RootPack as TSV if success', async () => {
    // Prepare
    const findResult: FindResult = {
      success: true,
      rootPack: { r1: 567, r2: -986 },
    }

    // Execute
    await printResult(findResult, fs.createWriteStream(filePath))

    // Assert
    expect(fs.readFileSync(filePath, { encoding: 'utf8' })).toBe('567\t-986\n')
  })

  it('prints empty string if not success', async () => {
    // Execute
    await printResult({ success: false }, fs.createWriteStream(filePath))

    // Assert
    expect(fs.readFileSync(filePath, { encoding: 'utf8' })).toBe('\n')
  })
})
