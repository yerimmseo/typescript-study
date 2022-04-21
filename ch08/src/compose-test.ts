import {f, g, h} from './utils/f-g-h'
import { compose } from './utils/compose'

const composedFGH = compose(h, g, f) // f ~> g ~> h
console.log(
  composedFGH('x')  // h(g(f(x)))
)