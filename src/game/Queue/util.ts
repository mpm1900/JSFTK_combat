import { tQueue } from './type'
import { tProcessedCharacter, tCharacter } from '../Character/type'
import { processCharacter } from '../Character/util'

const AGILITY_OFFSET = 100

export const makeCombatQueue = (characters: tProcessedCharacter[]): tQueue => {
  const sortedCharacters = characters.sort(
    (a, b) => b.stats.agility - a.stats.agility,
  )
  return sortedCharacters.reduce(
    (r, c, i) => ({
      ...r,
      [c.id]: AGILITY_OFFSET - c.stats.agility,
    }),
    {},
  )
}

export const getMax = (queue: tQueue): number => {
  return Object.keys(queue).reduce((r: number, id: string) => {
    if (r < queue[id]) return queue[id]
    return r
  }, Number.NEGATIVE_INFINITY)
}

export const getMin = (
  queue: tQueue,
  characters: tProcessedCharacter[],
): number => {
  return Object.keys(queue).reduce((min: number, id: string) => {
    if (queue[id] < min) {
      const c = characters.find((c) => c.id === id) as tProcessedCharacter
      if (c.stats.queueConsolidationModifier > 0) {
        return queue[id]
      } else {
        return min
      }
    }
    return min
  }, Number.POSITIVE_INFINITY)
}

export const consolidateQueue = (
  queue: tQueue,
  characters: tProcessedCharacter[] = [],
): tQueue => {
  let min = getMin(queue, characters)
  return Object.keys(queue).reduce((r, id) => {
    const character = characters.find((c) => c.id === id)
    const offset = (character?.stats?.queueConsolidationModifier || 0) * min
    return {
      ...r,
      [id]: queue[id] - offset,
    }
  }, {})
}

export const shiftQueue = (
  queue: tQueue,
  character: tProcessedCharacter,
  characters: tProcessedCharacter[],
): tQueue => {
  const ret = consolidateQueue(
    {
      ...queue,
      [character.id]: AGILITY_OFFSET - character.stats.agility,
    },
    characters,
  )
  return ret
}

export const getFirst = (queue: tQueue): string => {
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

export const removeFromQueue = (queue: tQueue, id: string): tQueue => {
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
  queue: tQueue,
  characters: tProcessedCharacter[],
): tQueue => {
  return consolidateQueue(
    characters.reduce((r, c) => {
      return c.health > 0 ? r : { ...r, [c.id]: queue[c.id] }
    }, {}),
  )
}

export const getSortedIds = (queue: tQueue): string[] => {
  return Object.keys(queue).sort((a, b) => queue[a] - queue[b])
}

export const commitQueueUpdates = (
  queue: tQueue,
  source: tCharacter,
  characters: tCharacter[],
): tQueue => {
  const pc = processCharacter(source)
  const pcs = characters.map((c) => processCharacter(c))
  const shiftedQueue = shiftQueue(queue, pc, pcs)
  return validateQueue(
    Object.keys(shiftedQueue).reduce((q, id) => {
      const character = pcs.find((c) => c.id === id)
      return {
        ...q,
        [id]:
          character?.stats?.queueValueSet !== undefined
            ? character.stats.queueValueSet
            : shiftedQueue[id],
      }
    }, {}),
    pcs,
  )
}
