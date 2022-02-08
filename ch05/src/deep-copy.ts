// 깊은 복사
let original = 1
let copied = original
copied += 2
console.log(original, copied) // 1 3

// 얕은 복사
const originalArray = [5, 3, 9, 7]
const shallowCopiedArray = originalArray
shallowCopiedArray[0] = 0 // shallowCopiedArray의 내용을 변경하면 원본 배열의 값도 변경됨
console.log(originalArray, shallowCopiedArray) // [ 0, 3, 9, 7 ] [ 0, 3, 9, 7 ]

// 전개 연산자를 사용해 배열을 복사하면 깊은 복사 가능
const oArray = [1, 2, 3, 4]
const deepCopiedArray = [...oArray]
deepCopiedArray[0] = 0
console.log(oArray, deepCopiedArray) // [ 1, 2, 3, 4 ] [ 0, 2, 3, 4 ]


// 배열의 sort 메서드를 순수 함수로 구현
import { pureSort } from "./utils/pureSort"

let beforSort = [6, 2, 9, 0]
const afterSort = pureSort(beforSort)
console.log(beforSort, afterSort) // [ 6, 2, 9, 0 ] [ 0, 2, 6, 9 ]

// filter 메서드를 통해 배열 삭제
import { pureDelete } from "./utils/pureDelete"

const mixedArray: object[] = [
  [], {name: 'Jack'}, {name: 'Jane', age: 32}, ['description']
]
const objectOnly: object[] = pureDelete(mixedArray, (val) => Array.isArray(val))
console.log(mixedArray, objectOnly)
// [ [], { name: 'Jack' }, { name: 'Jane', age: 32 }, [ 'description' ] ] 
// [ { name: 'Jack' }, { name: 'Jane', age: 32 } ]

import { mergeArray } from "./utils/mergeArray"

const mergeArray1: string[] = mergeArray(
  ['Hello'], ['world']
)
console.log(mergeArray1) // [ 'Hello', 'world' ]

const mergeArray2: number[] = mergeArray(
  [1], [2, 3], [4, 5, 6], [7, 8, 9, 10]
)
console.log(mergeArray2) // [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]