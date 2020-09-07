import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const SPREAD_SHOT: SkillT = {
  ...makeEntity('Spread Shot'),
  damageModifier: -0.5,
  targetType: 'group',
  damage: true,
  healing: false,
  isBasicAttack: false,
  rolls: [makeCheck('perception', -5), makeCheck('perception', -5)],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  targetQueueOffset: 0,
  targetQueueSet: undefined,
}
