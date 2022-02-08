import { doSomething } from "./utils/doSomething" 

const [result, errorMessage] = doSomething()
console.log(result, errorMessage) // false Some error occurs...