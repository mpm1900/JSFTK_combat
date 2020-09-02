import { ProcessedCharacterT } from './Character'

export interface CombatQueueT {
  [characterId: string]: number
}

export const makeCombatQueue = (
  characters: ProcessedCharacterT[],
): CombatQueueT => {
  const sortedCharacters = characters.sort(
    (a, b) => b.stats.agility - a.stats.agility,
  )
  return sortedCharacters.reduce(
    (r, c, i) => ({
      ...r,
      [c.id]: i,
    }),
    {},
  )
}

export const consolidateQueue = (queue: CombatQueueT): CombatQueueT => {
  let min = Number.POSITIVE_INFINITY
  Object.keys(queue).forEach((id) => {
    if (min > queue[id]) min = queue[id]
  })
  return Object.keys(queue).reduce(
    (r, id) => ({
      ...r,
      [id]: queue[id] - min,
    }),
    {},
  )
}

export const shiftQueue = (
  queue: CombatQueueT,
  character: ProcessedCharacterT,
): CombatQueueT => {
  const ret = consolidateQueue({
    ...queue,
    [character.id]: 100 - character.stats.agility,
  })
  return ret
}

export const getFirst = (queue: CombatQueueT): string => {
  let min = Number.POSITIVE_INFINITY
  let key = Object.keys(queue)[0]
  Object.keys(queue).forEach((id) => {
    if (min > queue[id]) {
      min = queue[id]
      key = id
    }
  })
  return key
}

export const removeFromQueue = (
  queue: CombatQueueT,
  id: string,
): CombatQueueT => {
  return consolidateQueue(
    Object.keys(queue)
      .filter((key) => key !== id)
      .reduce(
        (r, id) => ({
          ...r,
          [id]: queue[id],
        }),
        {},
      ),
  )
}

export const validateQueue = (
  queue: CombatQueueT,
  characters: ProcessedCharacterT[],
): CombatQueueT => {
  return consolidateQueue(
    characters.reduce((r, c) => {
      return c.dead ? r : { ...r, [c.id]: queue[c.id] }
    }, {}),
  )
}

export const getSortedIds = (queue: CombatQueueT): string[] => {
  return Object.keys(queue).sort((a, b) => queue[a] - queue[b])
}
