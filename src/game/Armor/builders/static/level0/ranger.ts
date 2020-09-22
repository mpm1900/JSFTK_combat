import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import {
  AdventureBoots,
  AdventureCloak,
  AdventureHood,
} from '../level1/adventure'

export const RangerHood: tArmor = {
  ...createHat('Ranger Hood', 'common', 0, {
    resistance: 1,
    evasion: 3,
    dexterity: 1,
  }),
  level: 0,
  upgrades: [AdventureHood.id],
}

export const RangerCloak: tArmor = {
  ...createLightArmor('Ranger Cloak', 'common', 30, {
    armor: 2,
    evasion: 5,
    dexterity: 2,
    charisma: -2,
  }),
  level: 0,
  upgrades: [AdventureCloak.id],
}

export const RangerBoots: tArmor = {
  ...createFootwear('Ranger Boots', 'common', 15, {
    evasion: 2,
    dexterity: 1,
    agility: 1,
  }),
  level: 0,
  upgrades: [AdventureBoots.id],
}
