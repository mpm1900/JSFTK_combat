import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const DAZZLE: SkillT = {
  ...makeEntity('Dazzle'),
  damageModifier: 0,
  targetType: 'single',
  damage: false,
  isBasicAttack: false,
  rolls: [
    makeCheck('intelligence'),
    makeCheck('intelligence'),
    makeCheck('intelligence'),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [{ type: 'dazed', duration: 4 }],
}
