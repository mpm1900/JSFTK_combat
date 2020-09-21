export const makeRandom = (max: number, min: number = 0) => {
  const value = Math.floor(Math.random() * max) + min
  return value
}
