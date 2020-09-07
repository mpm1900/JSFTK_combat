import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const PIERCING_BLOW: SkillT = {
  ...makeEntity('Piercing Blow'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [makeCheck('strength'), makeCheck('strength')],
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
  targetQueueOffset: 0,
  targetQueueSet: undefined,
}
