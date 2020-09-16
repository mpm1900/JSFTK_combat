import { tWeapon } from '../../type'
import { tWeaponsByLevel } from '../type'
import { AXES } from './axe'
import { HAMMERS } from './hammer'
import { BOWS } from './bow'
import { CATALYSTS } from './catalyst'
import { CHIMES } from './chime'
import { DAGGERS } from './dagger'
import { GREATSWORDS } from './greatsword'
import { PISTOLS } from './pistol'
import { SCYTHES } from './scythe'
import { SWORDS } from './sword'

export const WEAPONS_BY_LEVEL: tWeaponsByLevel = {
  0: [
    ...AXES[0],
    ...HAMMERS[0],
    ...BOWS[0],
    ...CATALYSTS[0],
    ...CHIMES[0],
    ...DAGGERS[0],
    ...GREATSWORDS[0],
    ...PISTOLS[0],
    ...SCYTHES[0],
    ...SWORDS[0],
  ],
  1: [
    ...AXES[1],
    ...HAMMERS[1],
    ...BOWS[1],
    ...CATALYSTS[1],
    ...CHIMES[1],
    ...DAGGERS[1],
    ...GREATSWORDS[1],
    ...PISTOLS[1],
    ...SCYTHES[1],
    ...SWORDS[1],
  ],
  2: [
    ...AXES[2],
    ...HAMMERS[2],
    ...BOWS[2],
    ...CATALYSTS[2],
    ...CHIMES[2],
    ...DAGGERS[2],
    ...GREATSWORDS[2],
    ...PISTOLS[2],
    ...SCYTHES[2],
    ...SWORDS[2],
  ],
  3: [
    ...AXES[3],
    ...HAMMERS[3],
    ...BOWS[3],
    ...CATALYSTS[3],
    ...CHIMES[3],
    ...DAGGERS[3],
    ...GREATSWORDS[3],
    ...PISTOLS[3],
    ...SCYTHES[3],
    ...SWORDS[3],
  ],
  4: [
    ...AXES[4],
    ...HAMMERS[4],
    ...BOWS[4],
    ...CATALYSTS[4],
    ...CHIMES[4],
    ...DAGGERS[4],
    ...GREATSWORDS[4],
    ...PISTOLS[4],
    ...SCYTHES[4],
    ...SWORDS[4],
  ],
  5: [
    ...AXES[5],
    ...HAMMERS[5],
    ...BOWS[5],
    ...CATALYSTS[5],
    ...CHIMES[5],
    ...DAGGERS[5],
    ...GREATSWORDS[5],
    ...PISTOLS[5],
    ...SCYTHES[5],
    ...SWORDS[5],
  ],
}

export const ALL_WEAPONS = Object.keys(WEAPONS_BY_LEVEL).reduce(
  (allWeapons, level) => {
    return [...allWeapons, ...WEAPONS_BY_LEVEL[parseInt(level, 10)]]
  },
  [] as (() => tWeapon)[],
)
