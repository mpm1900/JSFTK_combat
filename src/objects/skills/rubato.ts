import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const RUBATO: SkillT = {
  ...makeEntity('Rubato'),
  damageModifier: -0.5,
  targetType: 'single',
  damage: false,
  healing: false,
  isBasicAttack: false,
  rolls: [
    makeCheck('talent', -10),
    makeCheck('talent', -10),
    makeCheck('talent', -10),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  targetQueueOffset: 200,
  targetQueueSet: undefined,
}
