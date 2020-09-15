import { LICH } from '../../Character/bosses'
import { TOMB_SPIRIT } from '../../Character/enemies/tomb_spirit'
import { WEAPONS } from '../../Weapon/builders/objects'
import { tFloorConfig } from '../type'

const FLOOR_2_WEAPONS = () => [...WEAPONS[3], ...WEAPONS[4], ...WEAPONS[5]]

export const FloorConfig2: tFloorConfig = {
  bosses: [LICH()],
  items: [...FLOOR_2_WEAPONS().map((w) => w())],
  enemies: {
    0: [
      [TOMB_SPIRIT(), TOMB_SPIRIT()],
      [TOMB_SPIRIT(), TOMB_SPIRIT(), TOMB_SPIRIT()],
    ],
  },
}
