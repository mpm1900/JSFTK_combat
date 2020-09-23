import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { AssassinBoots, AssassinCloak, AssassinHood } from '../level4'

export const RogueHood: tArmor = {
  ...createHat('Rogue Hood', 'epic', 400, {
    armor: 1,
    resistance: 3,
    evasion: 3,
  }),
  level: 3,
  upgrades: [AssassinHood.id],
}

export const RogueCloak: tArmor = {
  ...createLightArmor('Rogue Cloak', 'epic', 450, {
    armor: 5,
    resistance: 5,
    evasion: 10,
    dexterity: 5,
    charisma: 5,
    visionRange: 1,
  }),
  level: 3,
  upgrades: [AssassinCloak.id],
}

export const RogueBoots: tArmor = {
  ...createFootwear('Rogue Boots', 'epic', 400, {
    armor: 3,
    evasion: 3,
    dexterity: 4,
    agility: 4,
  }),
  level: 3,
  upgrades: [AssassinBoots.id],
}
