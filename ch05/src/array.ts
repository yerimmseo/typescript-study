let array = new Array
array.push(1); array.push(2); array.push(3)
console.log(array) // [ 1, 2, 3 ]

let numbers = [1, 2, 3]
let strings = ['Hello', 'World']
console.log(numbers, strings) // [ 1, 2, 3 ] [ 'Hello', 'World' ]

let a = [1, 2, 3]
let o = {name: 'Jack', age: 32}
console.log(Array.isArray(a), Array.isArray(o)) // true false


// 배열에 타입 주석을 붙이는 방법
let numArray: number[] = [1, 2, 3]
let strArray: string[] = ['Hello', 'World']

type IPerson = {name: string, age?: number}
let personArray: IPerson[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]
console.log(personArray)

import {split} from './utils/split'
import {join} from './utils/join'
console.log(
  split('hello'),           // [ 'h', 'e', 'l', 'l', 'o' ]
  split('h_e_l_l_o', '_')   // [ 'h', 'e', 'l', 'l', 'o' ]
)
console.log(
  join(['h', 'e', 'l', 'l', 'o']),       // hello
  join(['h', 'e', 'l', 'l', 'o'], '_'),  // h_e_l_l_o
)

const numbers2: number[] = [1, 2, 3, 4, 5]
for (let index = 0; index < numbers2.length; index++) {
  const item: number = numbers2[index]
  console.log(item) // 1 2 3 4 5
}

let arrayTwo: number[] = [1, 2, 3, 4, 5]
let [first, second, third, ...rest] = arrayTwo
console.log(first, second, third, rest) // 1 2 3 [ 4, 5 ]

// for...in 문은 배열의 인덱스 값을 순회
let names = ['Jack', 'Jane', 'Steve']
for (let index in names) {
  const name = names[index]
  console.log(`[${index}]: ${name}`) // [0]: Jack [1]: Jane [2]: Steve
}

let jack = {name: 'Jack', age: 32}
for (let property in jack)
  console.log(`${property}: ${jack[property]}`) // name: Jack age: 32

// for...of 문
for (let name of ['Jack', 'Jane', 'Steve'])
  console.log(name) // Jack Jane Steve

// 제네릭 타입 사용
// const arrayLength = (array) => array.length
// 이 함수가 다양한 타입을 가지는 배열에 똑같이 적용되게 하려면 T[]로 표현
// const arrayLength = (array: T[]): number => array.length
// 컴파일러가 T의 의미를 알 수 있도록 해야함
import {arrayLength, isEmpty} from './utils/arrayLength'
let numArray1: number[] = [1, 2, 3]
let strArray1: string[] = ['Hello', 'World']

type IPerson1 = {name: string, age?: number}
let personArray1: IPerson1[] = [{name: 'Jack'}, {name: 'Jane', age: 32}]

console.log(
  arrayLength(numArray1),     // 3
  arrayLength(strArray1),     // 2
  arrayLength(personArray1),  // 2
  isEmpty([]),                // true
  isEmpty([1])                // false
)

// 제네릭 함수의 타입 추론
const identity = <T>(n: T): T => n
console.log(
  identity<boolean>(true),  // true
  identity(true)            // true
)


const normal = (cb: (number) => number): void => {}
// const error = (cb: (number, number?) => number): void => {} 
// 이런 오류가 발생하면 fixed 선언문처럼 타입스크립트가 해석하지 못하는 부분에 변수를 삽입하고 이 변수에 타입을 명시해 해결함
const fixed = (cb: (a: number, number?) => number): void => {}

const f = <T>(cb: (arg: T, i?: number) => number): void => {}

// 전개 연산자를 사용해 두 배열과 특정 값을 동시에 결합하는 예
let array1: number[] = [1]
let array2: number[] = [2, 3]
let mergedArray: number[] = [...array1, ...array2, 4]
console.log(mergedArray); // [ 1, 2, 3, 4 ]

import {range} from './utils/range'
let numbers3: number[] = range(1, 9 + 1)
console.log(numbers3) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
