// export 키워드
// interface, class, type, let, const 키워드 앞에 붙일 수 있음
// import * as 심벌 from '파일 상대 경로'
import * as U from '../utils/makeRandomNumber'
import IPerson from './IPerson'

export default class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

export const makePerson = (name: string,
  age: number = U.makeRandomNumber()) => ({name, age})
// 난수 발생 기능을 makeRandomNumber.ts파일로 분리, Person.ts 파일에서 U라는 심벌로 접근할 수 있도록 import * as 구문 지정