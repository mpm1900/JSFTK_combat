import { createFootwear, createHat, createLightArmor } from '../..'
import { tArmor } from '../../../type'
import { NobleAttire, NobleHat, NobleShoes } from '../level3'

export const AntiquatedHat: tArmor = {
  ...createHat('Antiquated Hat', 'rare', 250, {
    armor: 2,
    resistance: 3,
    maxInspirationOffset: 1,
    charisma: 3,
    luck: 3,
  }),
  level: 2,
  upgrades: [NobleHat.id],
}

export const AntiquatedAttire: tArmor = {
  ...createLightArmor('Antiquated Attire', 'rare', 300, {
    armor: 6,
    resistance: 6,
    dexterity: -4,
    charisma: 4,
    luck: 4,
  }),
  level: 2,
  upgrades: [NobleAttire.id],
}

export const AntiquatedShoes: tArmor = {
  ...createFootwear('Antiquated Shoes', 'rare', 250, {
    armor: 2,
    resistance: 3,
    dexterity: -4,
    charisma: 3,
    luck: 3,
  }),
  level: 2,
  upgrades: [NobleShoes.id],
}
