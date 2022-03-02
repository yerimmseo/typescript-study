// async 함수를 Promise 객체로 사용한 예
import { test1 } from "./utils/test1"
import { test2 } from "./utils/test2"

test1()
  .then(() => test2())