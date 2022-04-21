import { FirstOrderFunc, SecondOrderFunc } from "./utils/function-signature"
import { add } from "./utils/second-order-func"

const add1: FirstOrderFunc<number, number> = add(1)  // add1은 부분 함수
// add(1) 대입시 에러났는데 add로 대입할 경우 에러가 없어짐?
console.log(
  add1(2),  // [Function (anonymous)]
  add(1)(2) // 3
)