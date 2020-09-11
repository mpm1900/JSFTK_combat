export const stringArr = (arr: string[]): string => {
  return arr.reduce((text, item, index) => {
    const f = index === 0
    const l = index === arr.length - 1 && !f
    return `${text}${!f && arr.length > 2 ? ', ' : ' '}${
      l ? ' and ' : ''
    }${item}`
  })
}
