export const pipe = <T>(...functions: readonly Function[]): Function => (x: T): T => {
  return functions.reduce((value, func) => func(value), x) // compose와 비교하여 functions을 reverse하는 코드가 없음
}