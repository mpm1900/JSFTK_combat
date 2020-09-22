import { createFootwear, createMagicArmor, createMagicHat } from '../..'
import { tArmor } from '../../../type'
import {
  ApprenticeHat,
  ApprenticeRobes,
  ApprenticeShoes,
} from '../level1/apprentice'

export const StudentHat: tArmor = {
  ...createMagicHat('Student Cap', 'common', 0, {
    resistance: 1,
    intelligence: 1,
  }),
  level: 0,
  upgrades: [ApprenticeHat.id],
}

export const StudentRobes: tArmor = {
  ...createMagicArmor('Student Robes', 'common', 0, {
    resistance: 2,
    strength: -2,
    intelligence: 2,
  }),
  level: 0,
  upgrades: [ApprenticeRobes.id],
}

export const StudentShoes: tArmor = {
  ...createFootwear('Student Shoes', 'common', 0, {
    intelligence: 1,
    strength: -2,
  }),
  level: 0,
  upgrades: [ApprenticeShoes.id],
}
