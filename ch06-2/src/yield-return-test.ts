import {random, gen} from './utils/yield-return'
const iter = gen()
while (true) {
  const {value, done} = iter.next(random(10, 1))
  if (done) break
  console.log(value)
}
/**
 * you select 0
 * you select 2
 * you select 9
 * you select 10
 * you select 2
 */