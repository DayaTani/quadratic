import { Writable } from 'stream'

const write = async (output: Writable, message: string): Promise<void> => {
  const writtenPromise = (resolve: (value?: unknown) => void, reject: (reason?: unknown) => void): void => {
    output.write(message, (error: unknown) => {
      /* istanbul ignore next */
      if (error) {
        reject(error)
        return
      }

      resolve()
    })
  }

  await new Promise(writtenPromise)
}

export default write
