// next 메서드가 있는 객체를 반환, 반복기를 제공하는 역할을 함 => '반복기 제공자'
export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined
      const done = value == undefined
      return {value, done}
    }
  }
}