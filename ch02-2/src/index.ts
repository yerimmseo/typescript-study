// import 키워드
// import { 심벌 목록 } from '파일의 상대 경로'
import IPerson from './person/Person'
import Person, {makePerson} from './person/Person'
import Chance from 'chance' // chance 패키지는 그럴듯한 가짜 데이터(fake data)를 만들어 주는데 사용
import * as R from 'ramda' // ramda는 함수형 유틸리티 패키지

// const testMakePerson = (): void => {
//   let jane: IPerson = makePerson('Jane')
//   let jack: IPerson = makePerson('Jack')
//   console.log(jane, jack)
// }

// testMakePerson()
const chance = new Chance()
let persons: IPerson[] = R.range(0, 2)
    .map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)
// Chance 패키지는 Chance 클래스 하나만 export default 형태로 제공
// change와 ramda는 외부 패키지이므로 node_modules 디렉터리에 있음