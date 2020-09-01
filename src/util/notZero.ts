export const notZero = <T = any>(value: number, content: T) =>
  value === 0 ? '' : content
