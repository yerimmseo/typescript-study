let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

// n = 'a'
// b = 1
// s = false
o = {name: 'Jack', age: 32}

let a: any = 0
a = 'hello'
a = true
a = {}

let u: undefined = undefined
//u = 1 // Type '1' is not assignable to type 'undefined' 오류 발생
// any는 모든 타입의 루트 타입, 즉 최상위 타입. undefined는 모든 타입의 최하위 타입

let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result) // Your count is 10

let o1: object = {name: 'Jack', age: 32}
o1 = {first: 1, second: 2}
console.log(o1)

interface IPerson {
  name: string
  age: number
}
let good: IPerson = {name: 'Jack', age: 32}

//let bad1: IPerson = {name: 'Jack'} // age 속성이 없으므로 오류
//let bad2: IPerson = {age: 32}      // name 속성이 없으므로 오류
//let bad3: IPerson = {}             // name과 age 속성이 없으므로 오류
//let bad4: IPerson = {name: 'Jack', age: 32, etc: true} // etc 속성이 있어서 오류

interface IPerson2 {
  name: string  // 필수 속성
  age: number   // 필수 속성
  etc?: boolean // 선택 속성
}
let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true}

let ai: {
  name: string
  age: number
  etc?: boolean
} = {name: 'Jack', age: 32}

// 익명 인터페이스는 주로 다음과 같은 함수를 구현할 때 사용
function printMe(me: {name: string, age: number, etc?: boolean}) {
  console.log(
    me.etc ?
      `${me.name} ${me.age} ${me.etc}` :
      `${me.name} ${me.age}`
  )
}
printMe(ai) // Jack 32

class Person1 {
  name: string
  age: number
}

let jack1 : Person1 = new Person1()
jack1.name = 'Jack'; jack1.age = 32
console.log(jack1) // Person1 { name: 'Jack', age: 32 }

class Person2 {
  constructor(public name: string, public age?: number) {}
}
let jack2 : Person2 = new Person2('Jack', 32)
console.log(jack2) // Person2 { name: 'Jack', age: 32 }

class Person3 {
  name: string
  age?: number
  constructor(name: string, age?: number) {
    this.name = name; this.age = age
  }
}
let jack3 : Person3 = new Person3('Jack', 32)
console.log(jack3) // Person3 { name: 'Jack', age: 32 }

interface IPerson4 {
  name: string
  age?: number
}

class Person4 implements IPerson4 {
  name: string
  age: number
}
// Person2 구현 방식을 응용
class Person4_1 implements IPerson4 {
  constructor(public name: string, public age?: number) {}
}
let jack4: IPerson4 = new Person4_1('Jack', 32)
console.log(jack4) // Person4_1 { name: 'Jack', age: 32 }


// AbstractPerson5는 name 속성 앞에 abstract가 붙었으므로 new 연산자를 적용해 객체를 만들 수 없음
abstract class AbstractPerson5 {
  abstract name: string
  constructor(public age?: number) {}
}

class Person5 extends AbstractPerson5 {
  constructor(public name: string, age?: number) {
    super(age) // 부모 클래스 생성자를 super 키워드로 호출
  }
}

class A {
  static initValue = 1
}

let initValue = A.initValue // 1
