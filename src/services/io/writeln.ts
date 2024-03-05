import { Writable } from 'stream'

/**
 * Writes a message followed by a newline character to a writable stream.
 * @param message - The message to write.
 * @param output - The writable stream to write the message to.
 * @returns A promise that resolves once the message is written.
 */
const writeln = async (message: string, output: Writable): Promise<void> => {
  /**
   * Executor function for the Promise.
   * @param resolve - Function to call when the message is successfully written.
   * @param reject - Function to call if an error occurs while writing the message.
   */
  const promiseExecutor = (resolve: (value?: unknown) => void, reject: (reason?: unknown) => void): void => {
    output.write(message + '\n', error => {
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

export default writeln
