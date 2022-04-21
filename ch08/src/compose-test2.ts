import { compose } from "./utils/compose"

const inc = x => x + 1

const composed = compose(inc, inc, inc)
console.log(
  composed(1) // 4 // 1 ~> inc ~> 2 ~> inc ~> 3 ~> inc ~> 4
)