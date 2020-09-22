import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { HunterHood, HunterCloak, HunterBoots } from '../level2'

export const AdventureHood: tArmor = {
  ...createHat('Adventurer Hood', 'uncommon', 100, {
    resistance: 2,
    evasion: 3,
    dexterity: 2,
  }),
  level: 1,
  upgrades: [HunterHood.id],
}

export const AdventureCloak: tArmor = {
  ...createLightArmor('Adventurer Cloak', 'uncommon', 150, {
    armor: 3,
    resistance: 3,
    evasion: 6,
    dexterity: 3,
    charisma: -4,
  }),
  level: 1,
  upgrades: [HunterCloak.id],
}

export const AdventureBoots: tArmor = {
  ...createFootwear('Adventurer Boots', 'uncommon', 100, {
    armor: 2,
    evasion: 3,
    dexterity: 2,
    agility: 2,
  }),
  level: 1,
  upgrades: [HunterBoots.id],
}
