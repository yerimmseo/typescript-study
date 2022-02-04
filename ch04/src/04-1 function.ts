function add(a: number, b: number) : number {
  return a + b
}

let result = add(1, 2)
console.log(result)

function printMe(name:string, age: number): void {
  console.log(`name: ${name}, age: ${age}`)
}

// 함수 시그니처 사용 예
let printMe2: (string, number) => void = function (name: string, age: number): void {}

// stringNumberFunc이라는 이름으로 타입 별칭 생성
type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function(a: string, b: number): void {}
let g: stringNumberFunc = function(c: string, d: number): void {}

// undefined 타입을 고려하지 않은 예
interface INameable {
  name: string
}
// function getName(o: INameable) {return o.name}

// let n = getName(undefined) // 오류 발생. undefined.name이 되어 Cannot read property 'name' of undefined
// console.log(n)

// undefined일 때를 고려한 예
function getName2(o: INameable) {
  return o != undefined ? o.name : 'unknown name'
}

let n2 = getName2(undefined)
console.log(n2)                       // unknown name
console.log(getName2({name: 'Jack'})) // Jack

// 인터페이스에 선택 속성이 존재한다면
interface IAgeable {
  age?: number
}
function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0
}

console.log(getAge(undefined))  // 0
console.log(getAge(null))       // 0
console.log(getAge({age: 32}))  // 32

function fn(arg1: string, arg?: number) {console.log(`arg: ${arg}`)}

fn('hello', 1) // arg: 1
fn('hello')    // arg: undefined

type OptionalArgFunc = (string, number?) => void