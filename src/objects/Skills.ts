import { StatusTypeT } from '../types'

export type PerfectKeyT = StatusTypeT | 'splash' | 'pierce'
export const PERFECT_DISPLAY_INFO: Record<PerfectKeyT, string> = {
  splash: 'Splash Damage',
  pierce: 'Ignore Resistances',
  bleeding: 'Bleed',
  burning: 'Burn',
  frozen: 'Freeze',
  poisoned: 'Poison',
  targeted: 'Taunt Enemies',
  dazed: 'Daze',
  evasive: 'Become Evasive',
}
