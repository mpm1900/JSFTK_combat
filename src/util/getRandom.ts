export const getRandom = <T>(items: T[]) =>
  items[Math.floor(Math.random() * items.length)]
