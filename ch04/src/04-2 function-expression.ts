// 자바스크립트에서 함수는 Function 클래스의 인스턴스
let add2 = new Function('a', 'b', 'return a + b') // function add(a, b) {return a + b}
let result2 = add2(1, 2)
console.log(result2) // 3

let add3 = function(a, b) {return a + b}
console.log(add3(1, 2)) // 3

let f1 = function(a, b) {return a + b}
f1 = function(a, b) {return a - b}

let functionExpression = function(a, b) {return a + b}
let value = functionExpression(1, 2) // 3

let value2 = (function(a, b) {return a + b})(1, 2)
// let value2 =
// (function(a, b) {return a + b})
// (1, 2)

const isGreater = (a: number, b: number): boolean => a > b