import { tConsumable, tConsumableStack } from './type'

export const considateConsumableListToStack = (
  consumables: tConsumable[],
): tConsumableStack[] => {
  let stack: tConsumableStack[] = []
  const updateStackItem = (id: string) =>
    stack.map((s) =>
      s.consumable.id === id ? { ...s, count: s.count + 1 } : s,
    )
  const containsId = (id: string) =>
    stack.map((s) => s.consumable.id).includes(id)
  consumables.forEach((c) => {
    if (containsId(c.id)) {
      stack = updateStackItem(c.id)
    } else {
      stack = [...stack, { consumable: c, count: 1 }]
    }
  })
  return stack
}
