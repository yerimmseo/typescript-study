import { RangeIterable } from "./utils/RangeIterable"
const iterator = new RangeIterable(1, 3 + 1)

for (let value of iterator)
  console.log(value) // 1 2 3

