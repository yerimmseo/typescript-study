import { gen12345 } from "./utils/yield-star"

for (let value of gen12345())
  console.log(value) // 1 2 3 4 5