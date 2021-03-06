import { tWeaponStatsConfig } from './type'

export const DEFAULT_WEAPON_TYPE_STATS: tWeaponStatsConfig = {
  axe: {},
  hammer: {},
  sword: {},
  greatsword: {
    agility: -2,
  },
  bow: {
    damageModifiers: {
      flying: 0.1,
      undead: 0,
      beast: 0,
    },
  },
  dagger: {
    agility: 2,
    criticalChance: 10,
  },
  scythe: {
    evasion: 2,
    resistance: 1,
  },
  catalyst: {},
  chime: {
    damageModifiers: {
      flying: 0,
      undead: 0.02,
      beast: 0,
    },
  },
  pistol: {},
  fist: {},
  enemy: {},
}
