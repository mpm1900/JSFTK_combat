import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { RogueBoots, RogueCloak, RogueHood } from '../level3'

export const HunterHood: tArmor = {
  ...createHat('Hunter Hood', 'rare', 250, {
    resistance: 3,
    evasion: 4,
    dexterity: 3,
  }),
  level: 2,
  upgrades: [RogueHood.id],
}

export const HunterCloak: tArmor = {
  ...createLightArmor('Hunter Cloak', 'rare', 300, {
    armor: 5,
    resistance: 5,
    evasion: 7,
    dexterity: 4,
    charisma: -4,
    agility: 2,
  }),
  level: 2,
  upgrades: [RogueCloak.id],
}

export const HunterBoots: tArmor = {
  ...createFootwear('Hunter Boots', 'rare', 250, {
    armor: 3,
    evasion: 4,
    dexterity: 3,
    agility: 3,
  }),
  level: 2,
  upgrades: [RogueBoots.id],
}
