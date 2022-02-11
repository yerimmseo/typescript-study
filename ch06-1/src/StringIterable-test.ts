import { StringIterable } from "./utils/StringIterable"
for (let value of new StringIterable(['hello', 'world', '!']))
  console.log(value)