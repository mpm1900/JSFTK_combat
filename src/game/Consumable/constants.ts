import { GODSBEARD } from './objects/godsbeard'
import { tCharacterClass } from '../Character/type'
import { tConsumable } from './type'

export const CLASS_CONSUMABLES: Record<tCharacterClass, tConsumable[]> = {
  blacksmith: [GODSBEARD()],
  hunter: [GODSBEARD()],
  scholar: [GODSBEARD()],
  bard: [GODSBEARD()],
  hobo: [],
  enemy: [],
}
