export interface HasIdT {
  id: string
}
export const sortById = <T extends HasIdT>(list: T[]): T[] => {
  return list.sort((a, b) => a.id.localeCompare(b.id))
}
