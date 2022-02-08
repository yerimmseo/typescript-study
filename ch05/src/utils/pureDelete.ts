// splice는 원본 배열의 내용을 변경하므로 filter를 사용하여 삭제하는 함수 구현
export const pureDelete = <T>(array: readonly T[], cb: (val: T, index?: number) => 
boolean): T[] => array.filter((val, index) => cb(val, index) == false)