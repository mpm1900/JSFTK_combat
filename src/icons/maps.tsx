import Vigor from './svg/delapouite/heart-beats.svg'
import Strength from './svg/delapouite/biceps.svg'
import Brain from './svg/lorc/brain.svg'
import Awareness from './svg/delapouite/eye-target.svg'
import Juggler from './svg/lorc/juggler.svg'
import Agility from './svg/lorc/sprint.svg'
import Clover from './svg/lorc/clover.svg'

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
import { GODSBEARD } from '../game/Consumable/objects/godsbeard'
import { tArmorResourceType, tArmorType } from '../game/Armor/type'
import { tWeaponType } from '../game/Weapon/type'
import { tCharacterClass } from '../game/Character/type'

import Executioner from './svg/delapouite/executioner-hood.svg'
import Hunter from './svg/lorc/cowled.svg'
import Bard from './svg/delapouite/female-vampire.svg'
import Scholar from './svg/delapouite/wizard-face.svg'
import Hobo from './svg/delapouite/perspective-dice-six.svg'

export { SKILL_ICONS } from './skills'
export { STATUS_ICONS } from './status'

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
  executioner: Executioner,
  patrician: Bard,
  ranger: Hunter,
  student: Scholar,
  drifter: Hobo,
}
