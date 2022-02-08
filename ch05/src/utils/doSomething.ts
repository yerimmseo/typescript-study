import { ResultType } from "./ResultType"

export const doSomething = (): ResultType => {
  try {
    throw new Error('Some error occurs...')
  } catch (error) {
    return [false, error.message]
  }
}