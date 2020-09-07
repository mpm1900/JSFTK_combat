import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const SURGE: SkillT = {
  ...makeEntity('Surge'),
  damageModifier: -0.2,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [
    makeCheck('intelligence'),
    makeCheck('intelligence'),
    makeCheck('intelligence'),
  ],
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
  targetQueueOffset: 0,
  targetQueueSet: undefined,
}
