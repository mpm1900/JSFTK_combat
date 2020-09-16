import { tEncounterType, tFloor } from '../../game/Encounter/type'
import Unknown from '../../icons/svg/delapouite/perspective-dice-six.svg'
import Shop from '../../icons/svg/delapouite/coins.svg'
import Combat from '../../icons/svg/lorc/crossed-swords.svg'
import Shrine from '../../icons/svg/lorc/divided-spiral.svg'
import Boss from '../../icons/svg/lorc/crowned-skull.svg'
import Reward from '../../icons/svg/lorc/laurel-crown.svg'

export const getEncounterIcon = (type: tEncounterType | undefined): string => {
  switch (type) {
    case 'combat':
      return Combat
    case 'shop':
      return Shop
    case 'shrine':
      return Shrine
    case 'boss':
      return Boss
    case 'reward':
      return Reward
    default:
      return Unknown
  }
}

export const getChosenEncounters = (floor: tFloor) =>
  floor.encounters.map((e) =>
    e.chosen !== undefined ? e.choices[e.chosen] : undefined,
  )
