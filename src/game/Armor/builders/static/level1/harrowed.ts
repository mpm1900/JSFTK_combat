import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { HunterBoots, HunterCloak, HunterHood } from '../level2'

export const HarrowedHood: tArmor = {
  ...createHat('Harrowed Hood', 'uncommon', 100, {
    armor: 1,
    evasion: 3,
    dexterity: 1,
    criticalDamageModifier: 2,
  }),
  level: 1,
  upgrades: [HunterHood.id],
}

export const HarrowedCloak: tArmor = {
  ...createLightArmor('Harrowed Cloak', 'uncommon', 150, {
    armor: 2,
    resistance: 3,
    evasion: 3,
    dexterity: 1,
    criticalChance: 3,
    criticalDamageModifier: 3,
  }),
  level: 1,
  upgrades: [HunterCloak.id],
}

export const HarrowedBoots: tArmor = {
  ...createFootwear('Harrowed Boots', 'uncommon', 100, {
    criticalChance: 2,
    dexterity: 1,
    agility: 2,
  }),
  level: 1,
  upgrades: [HunterBoots.id],
}
