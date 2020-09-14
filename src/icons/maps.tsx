import Vigor from './svg/delapouite/heart-beats.svg'
import Strength from './svg/delapouite/biceps.svg'
import Brain from './svg/lorc/brain.svg'
import Awareness from './svg/delapouite/eye-target.svg'
import Juggler from './svg/lorc/juggler.svg'
import Agility from './svg/lorc/sprint.svg'
import Clover from './svg/lorc/clover.svg'

import Dazed from './svg/lorc/star-swirl.svg'
import Targeted from './svg/sbed/targeted.svg'
import Evasive from './svg/lorc/dodging.svg'
import SpeedDown from './svg/delapouite/sticky-boot.svg'
import Poisoned from './svg/lorc/biohazard.svg'
import Burning from './svg/carl-olsen/flame.svg'
import Bleeding from './svg/lorc/bleeding-wound.svg'
import Snowflake from './svg/lorc/snowflake-2.svg'
import ArmorDown from './svg/lorc/broken-shield.svg'

import Shot from './svg/lorc/high-shot.svg'
import Headshot from './svg/delapouite/shield-impact.svg'
import Arcane from './svg/lorc/fire-zone.svg'
import Nova from './svg/lorc/heavy-timer.svg'
import Stun from './svg/lorc/ubisoft-sun.svg'
import Smash from './svg/lorc/flat-hammer.svg'
import Shockwave from './svg/lorc/hammer-drop.svg'
import Taunt from './svg/lorc/bordered-shield.svg'
import Ring from './svg/lorc/ringing-bell.svg'
import Reverberate from './svg/lorc/resonance.svg'
import Protect from './svg/lorc/shieldcomb.svg'
import PinDown from './svg/lorc/energy-arrow.svg'
import Reset from './svg/delapouite/backward-time.svg'
import Slow from './svg/lorc/snail.svg'
import SpreadShot from './svg/lorc/double-shot.svg'
import TimeJump from './svg/delapouite/extra-time.svg'
import Heal from './svg/sbed/health-normal.svg'
import Lunge from './svg/lorc/wave-strike.svg'
import Restore from './svg/lorc/life-support.svg'
import Dodging from './svg/lorc/dodging.svg'
import Chop from './svg/lorc/axe-in-stump.svg'
import Strike from './svg/lorc/plain-dagger.svg'
import Stab from './svg/lorc/knife-thrust.svg'
import Cleave from './svg/lorc/pointy-sword.svg'
import AxeSpin from './svg/lorc/axe-swing.svg'
import Slice from './svg/lorc/saber-slash.svg'
import ArmorUp from './svg/delapouite/vibrating-shield.svg'

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
import MagicStaff from './svg/lorc/wizard-staff.svg'
import Sword from './svg/lorc/broadsword.svg'
import Scythe from './svg/lorc/scythe.svg'
import Chime from './svg/lorc/ringing-bell.svg'
import Greatsword from './svg/lorc/croc-sword.svg'
import Fist from './svg/skoll/fist.svg'

import Godsbeard from './svg/delapouite/herbs-bundle.svg'
import { tBaseStats } from '../game/Stats/type'
import { tStatusType } from '../game/Status/type'
import { GODSBEARD } from '../game/Consumable/objects/godsbeard'
import { tArmorResourceType, tArmorType } from '../game/Armor/type'
import { tWeaponType } from '../game/Weapon/type'
import { tCharacterClass } from '../game/Character/type'

import Blacksmith from './svg/delapouite/viking-head.svg'
import Hunter from './svg/lorc/cowled.svg'
import Bard from './svg/cathelineau/nun-face.svg'
import Scholar from './svg/delapouite/wizard-face.svg'
import Hobo from './svg/delapouite/perspective-dice-six.svg'

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
  'speed-down': SpeedDown,
  poisoned: Poisoned,
  burning: Burning,
  bleeding: Bleeding,
  frozen: Snowflake,
  'armor-down': ArmorDown,
}

export const SKILL_ICONS: Record<string, string> = {
  Shot: Shot,
  Headshot: Headshot,
  'Pin Down': PinDown,
  Flurry: SpreadShot,

  Arcane: Arcane,
  Nova: Nova,

  Ring: Ring,
  Reverberate: Reverberate,

  Smash: Smash,
  Strike: Strike,
  Swing: Chop,
  Chop: Chop,
  Earthquake: Shockwave,
  'Axe Spin': AxeSpin,
  Cleave: Cleave,
  Lunge: Lunge,
  Stab: Stab,
  Slice: Slice,
  Swipe: Slice,

  Stun: Stun,
  Reset: Reset,

  Taunt: Taunt,

  Slow: Slow,
  Protect: Protect,
  'Time Jump': TimeJump,
  Heal: Heal,
  Restore: Restore,
  Rush: Agility,
  Vanish: Dodging,
  'Evade Up': Dodging,
  'Armor Up': ArmorUp,
}

export const ARMOR_TYPE_ICONS: Record<tArmorType, string> = {
  'magic-armor': MagicArmor,
  'light-armor': ClothArmor,
  'heavy-armor': Armor,
  shield: Shield,
  ward: MagicShield,
  footwear: Footwear,
  hat: Hat,
  'magic-hat': MagicHat,
  helmet: Helmet,
  charm: '',
  ring: '',
}

export const WEAPON_TYPE_ICONS: Record<tWeaponType, string> = {
  enemy: '',
  axe: Axe,
  hammer: Blunt,
  bow: Bow,
  dagger: Dagger,
  chime: Chime,
  pistol: Handgun,
  catalyst: MagicStaff,
  scythe: Scythe,
  sword: Sword,
  greatsword: Greatsword,
  fist: Fist,
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
  hobo: Hobo,
}
