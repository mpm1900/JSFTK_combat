import { StatsT, ArmorTypeT, StatusTypeT } from '../types'

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

import Shot from './svg/lorc/high-shot.svg'
import SnipeShot from './svg/delapouite/shield-impact.svg'
import Surge from './svg/lorc/fire-zone.svg'
import AreaBast from './svg/lorc/heavy-timer.svg'
import Dazzle from './svg/lorc/ubisoft-sun.svg'
import Smash from './svg/lorc/flat-hammer.svg'
import Shockwave from './svg/lorc/hammer-drop.svg'
import Taunt from './svg/lorc/bordered-shield.svg'
import Alto from './svg/delapouite/g-clef.svg'
import { SHOT } from '../objects/skills/shot'
import { SNIPE_SHOT } from '../objects/skills/snipe_shot'
import { SURGE } from '../objects/skills/surge'
import { AREA_BLAST } from '../objects/skills/area_blast'
import { DAZZLE } from '../objects/skills/dazzle'
import { SMASH } from '../objects/skills/smash'
import { SHOCKWAVE } from '../objects/skills/shockwave'
import { TAUNT } from '../objects/skills/taunt'
import { ALTO } from '../objects/skills/alto'

import MagicArmor from './svg/lorc/robe.svg'
import ClothArmor from './svg/lorc/scale-mail.svg'
import Armor from './svg/delapouite/chest-armor.svg'
import Shield from './svg/delapouite/viking-shield.svg'
import MagicShield from './svg/lorc/lightning-shield.svg'
import Footwear from './svg/lorc/leather-boot.svg'
import Hat from './svg/delapouite/robin-hood-hat.svg'
import MagicHat from './svg/lorc/pointy-hat.svg'
import Helmet from './svg/lorc/visored-helm.svg'

import Godsbeard from './svg/delapouite/herbs-bundle.svg'
import { GODSBEARD } from '../objects/consumables/godsbeard'

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

export const STATUS_ICONS: Partial<Record<StatusTypeT, string>> = {
  dazed: Dazed,
  targeted: Targeted,
  evasive: Evasive,
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
  [ALTO.id]: Alto,
}

export const ARMOR_TYPE_ICONS: Record<ArmorTypeT, string> = {
  ['magic-armor']: MagicArmor,
  ['cloth-armor']: ClothArmor,
  armor: Armor,
  shield: Shield,
  ['magic-shield']: MagicShield,
  footwear: Footwear,
  hat: Hat,
  ['magic-hat']: MagicHat,
  helmet: Helmet,
  charm: '',
  ring: '',
}

export const CONSUMABLE_ITEM_ICONS: Record<string, string> = {
  [GODSBEARD.id]: Godsbeard,
}
export const CONSUMABLE_ITEM_COLORS: Record<string, string> = {
  [GODSBEARD.id]: '#84a397',
}
