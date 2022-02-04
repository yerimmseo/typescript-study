export const range = (from: number, to: number): number[] =>
  from < to ? [from, ...range(from + 1, to)] : []
// range는 재귀함수 스타일로 동작