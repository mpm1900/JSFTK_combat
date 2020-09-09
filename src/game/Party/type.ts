import { tCharacter, tProcessedCharacter } from '../Character/type'
import { tArmor } from '../Armor/type'
import { tWeapon } from '../Weapon/type'

export interface tParty {
  isParty: true
  id: string
  characters: tCharacter[]
  items: (tArmor | tWeapon)[]
  gold: number
}

export interface tProcessedParty extends tParty {
  processed: true
  characters: tProcessedCharacter[]
}
