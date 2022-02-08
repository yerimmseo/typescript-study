const multiply = (result, val) => result * val

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let tempResult = numbers
  .filter(val => val % 2 != 0)
  .map(val => val * val)
  .reduce(multiply, 1)
let result = Math.round(Math.sqrt(tempResult))
console.log(result) // 945

import { range } from "./utils/range"

const array: number[] = range(1, 10 + 1)
const half = array.length / 2

let odds: number[] = array.filter((value) => value % 2 != 0)
let evens: number[] = array.filter((value) => value % 2 == 0)
console.log(odds, evens) // [ 1, 3, 5, 7, 9 ] [ 2, 4, 6, 8, 10 ]

let belowHalf: number[] = array.filter((v, index) => index < half)
let overHalf: number[] = array.filter((v, index) => index >= half)
console.log(belowHalf, overHalf) // [ 1, 2, 3, 4, 5 ] [ 6, 7, 8, 9, 10 ]


let squers: number[] = range(1, 5 + 1)
  .map((val: number) => val * val)
console.log(squers) // [ 1, 4, 9, 16, 25 ]

// number[] -> string[] 타입 배열로 가공
let names: string[] = range(1, 5 + 1)
  .map((val, index) => `[${index}]: ${val}`)
console.log(names) // [ '[0]: 1', '[1]: 2', '[2]: 3', '[3]: 4', '[4]: 5' ]

// reduce
let reduceSum: number = range(1, 100 + 1)
  .reduce((result: number, value: number) => result + value, 0)
console.log(reduceSum) // 5050

let reduceSum2: number = range(1, 10 + 1)
  .reduce((result: number, value: number) => result * value, 1) // 아이템을 곱할 때 주의할 점은 1을 전달해야 함
console.log(reduceSum2) // 3628800
