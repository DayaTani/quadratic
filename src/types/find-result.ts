import RootPack from './root-pack'

export interface FindSuccessResult {
  success: true
  rootPack: RootPack
}

interface FindFailedResult {
  success: false
}

type FindResult = FindSuccessResult | FindFailedResult

export default FindResult
