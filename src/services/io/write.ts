import { Writable } from 'stream'

/**
 * Writes a message to a writable stream.
 * @param output - The writable stream to write the message to.
 * @param message - The message to write.
 * @returns A promise that resolves once the message is written.
 */
const write = async (output: Writable, message: string): Promise<void> => {
  /**
   * Executor function for the Promise.
   * @param resolve - Function to call when the message is successfully written.
   * @param reject - Function to call if an error occurs while writing the message.
   */
  const promiseExecutor = (resolve: (value?: unknown) => void, reject: (reason?: unknown) => void): void => {
    output.write(message, error => {
      /* istanbul ignore next */
      if (error) {
        reject(error)
        return
      }

      resolve()
    })
  }

  await new Promise(promiseExecutor)
}

export default write
