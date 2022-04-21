// 클로저는 메모리가 해제되지 않고 프로그램이 끝날 때 까지 지속될 수도 있음
const makeNames = (): () => string => {     // 바깥쪽 유효 범위
  const names = ['Jack', 'Jane', 'Smith']
  let index = 0
  return (): string => {    // 안쪽 유효 범위
    if (index == names.length)
      index = 0
    return names[index++]
  }
}

const makeName: () => string = makeNames()
console.log(
  [1, 2, 3, 4, 5, 6].map(n => makeName())
)
// [ 'Jack', 'Jane', 'Smith', 'Jack', 'Jane', 'Smith' ]