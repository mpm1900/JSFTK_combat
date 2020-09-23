import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import {
  AristocratAttire,
  AristocratHat,
  AristocratShoes,
  HarrowedBoots,
  HarrowedCloak,
  HarrowedHood,
} from '../level1'
import {
  AdventureBoots,
  AdventureCloak,
  AdventureHood,
} from '../level1/adventure'

export const ReaperHood: tArmor = {
  ...createHat('Reaper Hood', 'common', 0, {
    armor: 1,
    evasion: 3,
    dexterity: 1,
  }),
  level: 0,
  upgrades: [HarrowedHood.id, AdventureHood.id, AristocratHat.id],
}

export const ReaperCloak: tArmor = {
  ...createLightArmor('Reaper Cloak', 'common', 30, {
    armor: 1,
    resistance: 1,
    evasion: 3,
    dexterity: 1,
    criticalChance: 1,
  }),
  level: 0,
  upgrades: [HarrowedCloak.id, AdventureCloak.id, AristocratAttire.id],
}

export const ReaperBoots: tArmor = {
  ...createFootwear('Reaper Boots', 'common', 15, {
    criticalChance: 1,
    dexterity: 1,
    agility: 1,
  }),
  level: 0,
  upgrades: [HarrowedBoots.id, AdventureBoots.id, AristocratShoes.id],
}
