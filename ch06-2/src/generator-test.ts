import { generator } from "./utils/generator"
for (let value of generator())
  console.log(value)
/** 실행 결과
 * generator started...
 * 1
 * 2
 * 3
 * generator finished...
 */
// for...of와 동일한 출력