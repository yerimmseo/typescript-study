// for...of 구문은 타입에 무관하게 배열에 담긴 값을 차례로 얻는데 활용
const numArray: number[] = [1, 2, 3]
for (let value of numArray)
  console.log(value)  // 1 2 3

const strArray: string[] = ['hello', 'world', '!']
for (let value of strArray)
  console.log(value)  // hello world !


// createRangeIterable 함수를 for...of 구문에 적용하면 '[Symbol.iterator()] 메서드가 없음' 오류 발생
import { createRangeIterable } from "./utils/createRangeIterable"
const iterable = createRangeIterable(1, 3 + 1)
// for (let value of iterable)
//   console.log(value)
// RangeIterable 처럼 클래스로 구현해야 함. RangeIterable 클래스는 [Symbol.iterator] 메서드를 구현하고 있음