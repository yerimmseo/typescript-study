let person: object = {name: "Jack", age: 32};
// object 타입은 name 속성을 가지지 않으므로 오류 발생
// person.name
// 타입 변환 구문을 사용해 오류 해결
(<{name: string}>person).name