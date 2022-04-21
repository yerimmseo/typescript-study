import {f, g, h} from './utils/f-g-h'
import { pipe } from './utils/pipe'

const piped = pipe(f, g, h)
console.log(
  piped('x')  // h(g(f(x)))
)