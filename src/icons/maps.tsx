import { StatsT, TagTypeT } from '../types'

import Vigor from './svg/delapouite/heart-beats.svg'
import Strength from './svg/delapouite/biceps.svg'
import Brain from './svg/lorc/brain.svg'
import Awareness from './svg/delapouite/eye-target.svg'
import Juggler from './svg/lorc/juggler.svg'
import Agility from './svg/lorc/sprint.svg'
import Clover from './svg/lorc/clover.svg'
import Accuracy from './svg/delapouite/convergence-target.svg'

import Dazed from './svg/lorc/star-swirl.svg'
import Targeted from './svg/sbed/targeted.svg'
import Evasive from './svg/lorc/dodging.svg'
import DamageReflection from './svg/lorc/shield-reflect.svg'

import Shot from './svg/lorc/high-shot.svg'
import SnipeShot from './svg/delapouite/shield-impact.svg'
import Surge from './svg/lorc/fire-zone.svg'
import AreaBast from './svg/lorc/heavy-timer.svg'
import Dazzle from './svg/lorc/ubisoft-sun.svg'
import Smash from './svg/lorc/flat-hammer.svg'
import Shockwave from './svg/lorc/hammer-drop.svg'
import Taunt from './svg/lorc/bordered-shield.svg'
import { SHOT } from '../objects/skills/shot'
import { SNIPE_SHOT } from '../objects/skills/snipe_shot'
import { SURGE } from '../objects/skills/surge'
import { AREA_BLAST } from '../objects/skills/area_blast'
import { DAZZLE } from '../objects/skills/Dazzle'
import { SMASH } from '../objects/skills/smash'
import { SHOCKWAVE } from '../objects/skills/shockwave'
import { TAUNT } from '../objects/skills/taunt'

export const STATI_ICONS: Partial<Record<keyof StatsT | 'accuracy', string>> = {
  vigor: Vigor,
  strength: Strength,
  intelligence: Brain,
  perception: Awareness,
  talent: Juggler,
  agility: Agility,
  luck: Clover,
  accuracy: Accuracy,
}

export const TAG_ICONS: Record<TagTypeT, string> = {
  dazed: Dazed,
  targeted: Targeted,
  evasive: Evasive,
  ['damage-reflection']: DamageReflection,
}

export const SKILL_ICONS: Record<string, string> = {
  [SHOT.id]: Shot,
  [SNIPE_SHOT.id]: SnipeShot,
  [SURGE.id]: Surge,
  [AREA_BLAST.id]: AreaBast,
  [DAZZLE.id]: Dazzle,
  [SMASH.id]: Smash,
  [SHOCKWAVE.id]: Shockwave,
  [TAUNT.id]: Taunt,
}
