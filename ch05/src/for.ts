// * 명령형 프로그래밍 방식
let sum = 0
for (let val = 1; val <= 100;)
  sum += val++
console.log(sum) // 5050

// * 선언형 프로그래밍 방식 -> 데이터 생성과 가공 과정을 분리
import {range} from './utils/range'

let numbers: number[] = range(1, 100 + 1)
console.log(numbers) // [1, 2, ..., 100]

// * 폴드(fold) : T[] 타입 배열을 가공해 T 타입 결과를 만들어 줌
import {fold} from './utils/fold'
// 입력 데이터 생성
let numbers2: number[] = range(1, 100 + 1)
// 입력 데이터 가공
let result2 = fold(numbers2, (result, value) => result + value, 0)
console.log(result2) // 5050


// * 명령형 프로그래밍 방식
let oddSum = 0
for (let val = 1; val <= 100; val += 2)
  oddSum += val
console.log(oddSum) // 2500

// * filter 
import {filter} from './utils/filter'
let numbers3: number[] = range(1, 100 + 1)
const isOdd = (n: number): boolean => n % 2 != 0
let result3 = fold(
  filter(numbers3, isOdd),
  (result, value) => result + value, 0
)
console.log(result3) // 2500

let evenSum = 0
for (let val = 0; val <= 100; val += 2)
  evenSum += val
console.log(evenSum) // 2550

let evenNumbers: number[] = range(1, 100 + 1)
const isEven = (n: number): boolean => n % 2 == 0
let result4 = fold(
  filter(evenNumbers, isEven),
  (result, value) => result + value, 0
)
console.log(result4) // 2550

let squareSum = 0
for (let val = 1; val <= 100; ++val)
  squareSum += val * val
console.log(squareSum) // 338350

import {map} from './utils/map'
let numbers4: number[] = range(1, 100 + 1)
let result5 = fold(
  map(numbers, value => value * value),
  (result, value) => result + value, 0
)
console.log(result5) // 338350