import {IPerson, ICompany} from './IPerson_ICompany'

let jack: IPerson = {name: 'Jack', age: 32},
    jane: IPerson = {name: 'Jane', age: 32}

let apple: ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}

console.log(jack)
console.log(jane)

console.log(apple)
console.log(ms)

// destructuring
//let name = jack.name, age = jack.age

let {name, age} = jack
console.log(name, age) // Jack 32

// 잔여 연산자 사용 예
let address: any = {
  country: 'Korea',
  city: 'Seoul',
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street, 2 Floor ABC building'
}
// country와 city를 제외한 나머지 속성을 별도의 detail 변수에 저장하고 싶다면, detail 변수 앞에 전여 연산자를 붙임
const {country, city, ...detail} = address
console.log(detail)

// 전개 연산자 사용 예
let coord = {...{x: 0}, ...{y: 0}}
console.log(coord) // { x: 0, y: 0 }
// part1, part2, part3이라는 세 개의 객체가 선언되었을 때, 이를 모두 통합한 새로운 객체를 만들고 싶다면 전개 연산자를 사용
let part1 = {name: 'Jane'}, part2 = {age: 22}, part3 = {city: 'Seoul', country: 'Kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged)