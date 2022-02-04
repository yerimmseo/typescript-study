import {A} from './utils/A'
import {B} from './utils/B'
import {Calculator} from './utils/method-chain'

let a: A = new A
a.method() // value: 1

let b: B = new B(2)
b.method() // value: 2

// 정적 메서드
export class C {
  static whoAreYou(): string {
    return `I'm class C`
  }
}

export class D {
  static whoAreYou(): string {
    return `I'm class D`
  }
}

console.log(C.whoAreYou()) // I'm class C
console.log(D.whoAreYou()) // I'm class D

let calc = new Calculator
let result = calc.add(1).add(2).multiply(3).multiply(4).value
console.log(result) // (0 + 1 + 2) * 3 * 4 = 36