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
