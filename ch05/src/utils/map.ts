// map은 'x ~> y' 형태로 어떤 값을 다른 값으로 만들어주는 연산을 의미
// 'x: T ~> y: Q' 처럼 입력과 출력 변수의 타입이 서로 다를 수 있음을 고려해야 함
export const map = <T, Q>(array: T[], callback: (value: T, index?: number) => Q): Q[] => {
  let result: Q[] = []
  for (let index = 0; index < array.length; ++index) {
    const value = array[index]
    result = [...result, callback(value, index)]
  }
  return result
}