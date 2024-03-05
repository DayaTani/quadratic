import RootPack from './root-pack'

/** Represents a successful result of finding roots of a quadratic equation. */
export interface FindSuccessResult {
  /** Indicates that the operation was successful. */
  success: true

  /** The roots of the quadratic equation. */
  rootPack: RootPack
}

/** Represents a failed result of finding roots of a quadratic equation. */
interface FindFailedResult {
  /** Indicates that the operation failed. */
  success: false;
}

/** Represents the result of finding roots of a quadratic equation. */
type FindResult = FindSuccessResult | FindFailedResult

export default FindResult
