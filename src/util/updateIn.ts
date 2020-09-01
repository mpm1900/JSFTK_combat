export interface IDT {
  id: string
}
export const upsertIn = <T extends IDT>(list: T[], item: T) => {
  return [...list.filter((i) => i.id !== item.id), item]
}

export const updateIn = <T extends IDT>(
  list: T[],
  id: string,
  accessor: (i: T) => T,
) => {
  return list.map((i) => (i.id === id ? accessor(i) : i))
}
