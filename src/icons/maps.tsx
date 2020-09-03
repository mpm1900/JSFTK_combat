import { StatsT, CharacterTagTypeT } from '../types'

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

import Shot from './svg/lorc/high-shot.svg'
import SnipeShot from './svg/delapouite/shield-impact.svg'
import { SHOT } from '../objects/skills/shot'
import { SNIPE_SHOT } from '../objects/skills/snipe_shot'

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

export const TAG_ICONS: Record<CharacterTagTypeT, string> = {
  dazed: Dazed,
  targeted: Targeted,
}

export const SKILL_ICONS: Record<string, string> = {
  [SHOT.id]: Shot,
  [SNIPE_SHOT.id]: SnipeShot,
}
