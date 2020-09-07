import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const PIN_DOWN: SkillT = {
  ...makeEntity('Pin Down'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: false,
  rolls: [makeCheck('perception', -10), makeCheck('perception', -10)],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [
    {
      type: 'speed-down',
      duration: -1,
    },
  ],
  targetQueueOffset: 0,
  targetQueueSet: undefined,
}
