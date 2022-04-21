import { FirstOrderFunc, SecondOrderFunc } from "./utils/function-signature"
import { add3 } from "./utils/third-order-func"

const add2: SecondOrderFunc<number, number> = add3(1)
const add1: FirstOrderFunc<number, number> = add2(2)
console.log(
  add1(3),      // 6
  add2(2)(3),   // 6
  add3(1)(2)(3) // 6
)