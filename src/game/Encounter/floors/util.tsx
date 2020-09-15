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
