import { ProcessedCharacterT } from './Character'
import { hasTag } from '../functions'

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
      [c.id]: 100 - c.stats.agility,
    }),
    {},
  )
}

export const getMax = (queue: CombatQueueT): number => {
  return Object.keys(queue).reduce((r: number, id: string) => {
    if (r < queue[id]) return queue[id]
    return r
  }, Number.NEGATIVE_INFINITY)
}

export const getMin = (
  queue: CombatQueueT,
  characters?: ProcessedCharacterT[],
): number => {
  return Object.keys(queue).reduce((r: number, id: string) => {
    if (queue[id] < r) {
      if (characters) {
        const c = characters.find((c) => c.id === id)
        if (c && hasTag(c, 'dazed')) {
          return r
        } else {
          return queue[id]
        }
      } else return queue[id]
    }
    return r
  }, Number.POSITIVE_INFINITY)
}

export const consolidateQueue = (
  queue: CombatQueueT,
  characters: ProcessedCharacterT[] = [],
): CombatQueueT => {
  let min = getMin(queue, characters)
  return Object.keys(queue).reduce((r, id) => {
    const character = characters.find((c) => c.id === id)
    const offset = character && hasTag(character, 'dazed') ? 0 : min
    return {
      ...r,
      [id]: queue[id] - offset,
    }
  }, {})
}

export const shiftQueue = (
  queue: CombatQueueT,
  character: ProcessedCharacterT,
  characters: ProcessedCharacterT[],
): CombatQueueT => {
  const ret = consolidateQueue(
    {
      ...queue,
      [character.id]: 200 - character.stats.agility,
    },
    characters,
  )
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
