import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'

export const AssassinHood: tArmor = {
  ...createHat('Assassin Hood', 'mythic', 500, {
    resistance: 5,
    evasion: 5,
    dexterity: 3,
  }),
  level: 4,
  upgrades: [],
}

export const AssassinCloak: tArmor = {
  ...createLightArmor('Assassin Cloak', 'mythic', 700, {
    armor: 9,
    resistance: 9,
    evasion: 10,
    dexterity: 7,
    charisma: -5,
    visionRange: 2,
  }),
  level: 4,
  upgrades: [],
}

export const AssassinBoots: tArmor = {
  ...createFootwear('Assassin Boots', 'mythic', 500, {
    armor: 5,
    evasion: 5,
    dexterity: 5,
    agility: 5,
  }),
  level: 4,
  upgrades: [],
}
