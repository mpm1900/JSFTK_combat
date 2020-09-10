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
import SpeedDown from './svg/delapouite/sticky-boot.svg'
import Poisoned from './svg/lorc/biohazard.svg'
import Burning from './svg/carl-olsen/flame.svg'
import Bleeding from './svg/lorc/bleeding-wound.svg'

import Shot from './svg/lorc/high-shot.svg'
import SnipeShot from './svg/delapouite/shield-impact.svg'
import Surge from './svg/lorc/fire-zone.svg'
import AreaBast from './svg/lorc/heavy-timer.svg'
import Dazzle from './svg/lorc/ubisoft-sun.svg'
import Smash from './svg/lorc/flat-hammer.svg'
import Shockwave from './svg/lorc/hammer-drop.svg'
import Taunt from './svg/lorc/bordered-shield.svg'
import Alto from './svg/delapouite/g-clef.svg'
import Protect from './svg/lorc/shieldcomb.svg'
import PinDown from './svg/lorc/energy-arrow.svg'
import Reset from './svg/delapouite/backward-time.svg'
import SpreadShot from './svg/lorc/double-shot.svg'
import TimeJump from './svg/delapouite/extra-time.svg'
import Heal from './svg/sbed/health-normal.svg'
import CuttingSwing from './svg/lorc/wave-strike.svg'
import Restore from './svg/lorc/life-support.svg'
import Dodging from './svg/lorc/dodging.svg'
import Chop from './svg/lorc/axe-in-stump.svg'
import PowerStrike from './svg/lorc/pointy-sword.svg'

import MagicArmor from './svg/lorc/robe.svg'
import ClothArmor from './svg/lorc/scale-mail.svg'
import Armor from './svg/delapouite/chest-armor.svg'
import Shield from './svg/delapouite/viking-shield.svg'
import MagicShield from './svg/lorc/lightning-shield.svg'
import Footwear from './svg/lorc/leather-boot.svg'
import Hat from './svg/delapouite/robin-hood-hat.svg'
import MagicHat from './svg/lorc/pointy-hat.svg'
import Helmet from './svg/lorc/visored-helm.svg'
import Weapon from './svg/lorc/broadsword.svg'

import Axe from './svg/lorc/battle-axe.svg'
import Blunt from './svg/lorc/gavel.svg'
import Bow from './svg/lorc/heavy-arrow.svg'
import Dagger from './svg/lorc/bowie-knife.svg'
import Handgun from './svg/skoll/revolver.svg'
import Lute from './svg/lorc/guitar.svg'
import MagicStaff from './svg/lorc/wizard-staff.svg'
import Sword from './svg/lorc/broadsword.svg'
import Spear from './svg/lorc/stone-spear.svg'
import Tome from './svg/lorc/book-cover.svg'
import Torch from './svg/delapouite/torch.svg'

import Godsbeard from './svg/delapouite/herbs-bundle.svg'
import { tBaseStats } from '../game/Stats/type'
import { tStatusType } from '../game/Status/type'
import { SHOT } from '../game/Skill/objects/shot'
import { SNIPE_SHOT } from '../game/Skill/objects/snipe_shot'
import { PIERCING_BLOW } from '../game/Skill/objects/piercing_blow'
import { PIN_DOWN } from '../game/Skill/objects/pin_down'
import { SURGE } from '../game/Skill/objects/surge'
import { AREA_BLAST } from '../game/Skill/objects/area_blast'
import { SYMPHONY } from '../game/Skill/objects/symphony'
import { DAZZLE } from '../game/Skill/objects/dazzle'
import { RUBATO } from '../game/Skill/objects/rubato'
import { SMASH, STRIKE, CHOP } from '../game/Skill/objects/smash'
import { SHOCKWAVE } from '../game/Skill/objects/shockwave'
import { TAUNT } from '../game/Skill/objects/taunt'
import { ALTO } from '../game/Skill/objects/alto'
import { RITARDANDO } from '../game/Skill/objects/ritardando'
import { PROTECT } from '../game/Skill/objects/protect'
import { SPREAD_SHOT } from '../game/Skill/objects/spread_shot'
import { STUN_ATTACK } from '../game/Skill/objects/stun_attack'
import { TIME_JUMP } from '../game/Skill/objects/time_jump'
import { GODSBEARD } from '../game/Consumable/objects/godsbeard'
import { tArmorResourceType, tArmorType } from '../game/Armor/type'
import { HEAL } from '../game/Skill/objects/heal'
import { tWeaponType } from '../game/Weapon/type'
import { CUTTING_SWING } from '../game/Skill/objects/cutting_swing'
import { RESTORE } from '../game/Skill/objects/restore'
import { PRESTO } from '../game/Skill/objects/presto'
import { ANIMATO } from '../game/Skill/objects/animato'
import { POWER_STRIKE } from '../game/Skill/objects/power_strike'
import { tCharacterClass } from '../game/Character/type'

import Blacksmith from './svg/delapouite/dwarf-face.svg'
import Hunter from './svg/lorc/cowled.svg'
import Bard from './svg/cathelineau/nun-face.svg'
import Scholar from './svg/delapouite/wizard-face.svg'

export const STAT_ICONS: Record<keyof tBaseStats, string> = {
  vigor: Vigor,
  strength: Strength,
  intelligence: Brain,
  dexterity: Awareness,
  charisma: Juggler,
  agility: Agility,
  luck: Clover,
  evasion: '',
  criticalChance: '',
}

export const STATUS_ICONS: Partial<Record<tStatusType, string>> = {
  stunned: Dazed,
  targeted: Targeted,
  evasive: Evasive,
  protected: Protect,
  ['speed-down']: SpeedDown,
  poisoned: Poisoned,
  burning: Burning,
  bleeding: Bleeding,
}

export const SKILL_ICONS: Record<string, string> = {
  [SHOT.id]: Shot,
  [SNIPE_SHOT.id]: SnipeShot,
  [PIERCING_BLOW.id]: SnipeShot,
  [PIN_DOWN.id]: PinDown,
  [SURGE.id]: Surge,
  [AREA_BLAST.id]: AreaBast,
  [SYMPHONY.id]: AreaBast,
  [DAZZLE.id]: Dazzle,
  [RUBATO.id]: Reset,
  [SMASH.id]: Smash,
  [STRIKE.id]: Smash,
  [SHOCKWAVE.id]: Shockwave,
  [TAUNT.id]: Taunt,
  [ALTO.id]: Alto,
  [RITARDANDO.id]: Alto,
  [PROTECT.id]: Protect,
  [SPREAD_SHOT.id]: SpreadShot,
  [STUN_ATTACK.id]: Dazzle,
  [TIME_JUMP.id]: TimeJump,
  [HEAL('').id]: Heal,
  [CUTTING_SWING.id]: CuttingSwing,
  [RESTORE.id]: Restore,
  [PRESTO.id]: Agility,
  [ANIMATO.id]: Dodging,
  [CHOP.id]: Chop,
  [POWER_STRIKE.id]: PowerStrike,
}

export const ARMOR_TYPE_ICONS: Record<tArmorType, string> = {
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

export const WEAPON_TYPE_ICONS: Record<tWeaponType, string> = {
  enemy: '',
  axe: Axe,
  blunt: Blunt,
  bow: Bow,
  dagger: Dagger,
  pistol: Handgun,
  lute: Lute,
  ['magic-staff']: MagicStaff,
  spear: Spear,
  sword: Sword,
  tome: Tome,
  torch: Torch,
}

export const RESOURCE_ICONS: Record<tArmorResourceType | 'weapon', string> = {
  weapon: Weapon,
  offhand: Shield,
  body: Armor,
  head: Helmet,
  feet: Footwear,
}

export const CONSUMABLE_ITEM_ICONS: Record<string, string> = {
  [GODSBEARD().cid]: Godsbeard,
}
export const CONSUMABLE_ITEM_COLORS: Record<string, string> = {
  [GODSBEARD().cid]: '#84a397',
}

export const CHARACTER_CLASS_ICONS: Record<tCharacterClass, string> = {
  enemy: '',
  blacksmith: Blacksmith,
  bard: Bard,
  hunter: Hunter,
  scholar: Scholar,
}
