import {init} from './utils/init'
init(() => console.log('custom initialization finished.'))
// ∷ 실행 결과
// default initialization finished.
// custom initialization finished.
// all initialization finished.

const calc = (value: number, cb: (number) => void): void => {
  let add = (a, b) => a + b
  function multiply(a, b) {return a * b}

  let result = multiply(add(1, 2), value)
  cb(result)
}
calc(30, (result: number) => console.log(`result is ${result}`)) // result is 90


// 고차 함수
const high_add = (a: number): (number) => number => (b: number): number => a + b
const high_add_result = high_add(1)(2)
console.log(high_add_result)  // 3

type NumberToNumberFunc = (number) => number
export const high_add2 = (a: number): NumberToNumberFunc => {
  // NumberToNumberFunc 타입의 함수 반환
  const _add: NumberToNumberFunc = (b: number): number => {
    // number 타입의 값 반환
    return a + b // 클로저
  }
  return _add
}

let fn: NumberToNumberFunc = high_add2(1)

// fn에 담긴 값은 NumberToNumerFunc 타입의 함수 표현식이므로 fn 뒤에 함수 호출 연산자를 붙일 수 있음
let result1 = fn(2)
console.log(result1)          // 3
console.log(high_add2(1)(2))  // 3
// fn은 단순히 add(1)을 저장하는 임시 변수의 역할만 함
const multiply2 = a => b => c => a * b * c
console.log(multiply2(1)(2)(3)) // 함수 호출 연산자 3개 필요


// 디폴트 매개변수로 기본값 지정
export type Person = {name: string, age: number}

export const makePerson = (name: string, age: number = 10): Person => {
  const person = {name: name, age: age}
  return person
}
console.log(makePerson('Jack'))     // { name: 'Jack', age: 10 }
console.log(makePerson('Jane', 33)) // { name: 'Jane', age: 33 }

// 단축 구문 사용
const makePerson2 = (name: string, age: number) => {
  const person = {name, age} // {name: name, age: age}의 단축 표현
}

// 조금 간략해진 코드
export type Person2 = {name: string, age: number}

export const makePerson3 = (name: string, age: number = 10): Person2 => {
  const person = {name, age}
  return person
}
console.log(makePerson3('Jack'))
console.log(makePerson3('Jane', 33))

// 객체를 반환하는 화살표 함수 생성
// export const makePerson4 = (name: string, age: number = 10): Person => {name, age}
// 다음과 같이 작성시 {}를 객체가 아닌 복합 실행문으로 해석함. 객체로 해석하게 하려면 소괄호로 감싸주어야 함
export const makePerson4 = (name: string, age: number = 10): Person => ({name, age})
console.log(makePerson4('Jack'))     // { name: 'Jack', age: 10 }
console.log(makePerson4('Jane', 33)) // { name: 'Jane', age: 33 }

// 색인 키와 값으로 객체 만들기
const makeObject = (key, value) => ({[key]: value})
console.log(makeObject('name', 'Jack'))       // { name: 'Jack' }
console.log(makeObject('firstName', 'Jane'))  // { firstName: 'Jane' }

type KeyType = {
  [key: string]: string
}

// 속성 이름만 다른 객체를 만드는 예
export type KeyValueType = {
  [key: string]: string
}
export const makeObject2 = (key: string, value: string): KeyValueType => ({[key]: value})

console.log(makeObject2('name', 'Jack'))
console.log(makeObject2('firstName', 'Jane'))