import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const DAZZLE: SkillT = {
  ...makeEntity('Dazzle'),
  damageModifier: -0.5,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: false,
  rolls: [makeCheck('talent', -5), makeCheck('talent', -5)],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [{ type: 'dazed', duration: 4 }],
  targetQueueOffset: 0,
  targetQueueSet: undefined,
}
