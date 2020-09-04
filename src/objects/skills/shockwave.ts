import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const SHOCKWAVE: SkillT = {
  ...makeEntity('Shockwave'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  isBasicAttack: false,
  rolls: [
    makeCheck('strength', -10),
    makeCheck('strength', -10),
    makeCheck('strength', -10),
    makeCheck('strength', -10),
  ],
  perfectSplash: true,
  perfectPierce: false,
  perfectStatus: [],
}
