import { tStatusType } from '../Status/type'

export type tPerfectKey = tStatusType | 'splash' | 'pierce' | 'heal'
export const PERFECT_DISPLAY_INFO: Partial<Record<tPerfectKey, string>> = {
  splash: 'Splash Damage',
  pierce: 'Ignore Resistances',
  bleeding: 'Bleed',
  burning: 'Burn',
  frozen: 'Freeze',
  poisoned: 'Poison',
  targeted: 'Taunt Enemies',
  stunned: 'Stun',
  evasive: 'Become Evasive',
  heal: 'Heal',
  protected: 'Protect',
  'attack-up': 'Attack Up',
  'speed-down': 'Speed Down',
  rushed: 'Rush Character',
  reset: 'Reset Character',
  cure: 'Cure Character',
}
