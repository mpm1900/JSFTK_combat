import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const TIME_JUMP: SkillT = {
  ...makeEntity('Time Jump'),
  damageModifier: 0,
  targetType: 'ally',
  damage: false,
  healing: false,
  isBasicAttack: false,
  rolls: [
    makeCheck('intelligence', -5),
    makeCheck('intelligence', -5),
    makeCheck('intelligence', -5),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  targetQueueOffset: 0,
  targetQueueSet: 0,
}
