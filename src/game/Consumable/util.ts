import { tConsumable, tConsumableStack } from './type'

export const considateConsumableListToStack = (
  consumables: tConsumable[],
): tConsumableStack[] => {
  let stack: tConsumableStack[] = []
  const updateStackItem = (cid: string) =>
    stack.map((s) =>
      s.consumable.cid === cid ? { ...s, count: s.count + 1 } : s,
    )
  const containsId = (cid: string) =>
    stack.map((s) => s.consumable.cid).includes(cid)
  consumables.forEach((c) => {
    if (containsId(c.cid)) {
      stack = updateStackItem(c.cid)
    } else {
      stack = [...stack, { consumable: c, count: 1 }]
    }
  })
  return stack
}
