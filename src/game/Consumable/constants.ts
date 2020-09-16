import { tProcessedCharacter } from '../Character/type'
import { CELESTIAL_LOTUS } from './objects/celestial_lotus'
import { GODSBEARD } from './objects/godsbeard'
import { POISON_KNIFE } from './objects/poison_knife'
import { BEAST_DRUG } from './objects/beast_drug'
import { CURE_POTION } from './objects/curing_potion'
import { FIREBOMB } from './objects/firebomb'

export const CONSUMABLE_DESCRIPTIONS: Record<
  string,
  (character: tProcessedCharacter) => string
> = {
  [GODSBEARD().cid]: (c) => `Heal for ${c.stats.consumableHealthGainOffset} HP`,
  [CELESTIAL_LOTUS().cid]: () => 'Remove all Curses',
  [POISON_KNIFE().cid]: () => `Inflict Poison`,
  [BEAST_DRUG().cid]: () => `+5 Attack Damage`,
  [CURE_POTION().cid]: () => `Cure Buring, Bleeding, Frozen and Poison`,
  [FIREBOMB().cid]: () => `Deal 15 Damage and inflict Burning`,
}
