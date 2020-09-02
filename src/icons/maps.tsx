import { StatsT } from '../types'
import Vigor from './svg/delapouite/heart-beats.svg'
import Strength from './svg/delapouite/biceps.svg'
import Brain from './svg/lorc/brain.svg'
import Awareness from './svg/delapouite/eye-target.svg'
import Juggler from './svg/lorc/juggler.svg'
import Agility from './svg/lorc/sprint.svg'
import Clover from './svg/lorc/clover.svg'

export const STATI_ICONS: Partial<Record<keyof StatsT, string>> = {
  vigor: Vigor,
  strength: Strength,
  intelligence: Brain,
  perception: Awareness,
  talent: Juggler,
  agility: Agility,
  luck: Clover,
}
