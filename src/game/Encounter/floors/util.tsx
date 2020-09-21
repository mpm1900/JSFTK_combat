import { getRandom } from '../../../util'
import { tCharacter } from '../../Character/type'

export const makeRandomFloorEncounter = (
  characterList: (() => tCharacter)[],
  enemyCount: number,
): tCharacter[] => {
  return Array(enemyCount)
    .fill(null)
    .map((_) => {
      return getRandom(characterList)()
    })
}

export interface tFloorEnemyConfig {
  enemy: () => tCharacter
  depths: number[]
}

export type tFloorEncounterSizes = Record<number, number>

export const buildFloorEnemeis = (
  configs: tFloorEnemyConfig[],
  encounterSizes: tFloorEncounterSizes,
  size: number,
) => {
  const result = Array(size)
    .fill(null)
    .map((_, depth) => {
      const enemies = configs
        .filter((c) => c.depths.includes(depth))
        .map((c) => c.enemy)
      return makeRandomFloorEncounter(enemies, encounterSizes[depth])
    })
    .reduce((res, current, index) => {
      return {
        ...res,
        [index]: [current],
      }
    }, {})

  return result
}
