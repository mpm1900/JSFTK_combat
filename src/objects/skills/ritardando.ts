import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const RITARDANDO: SkillT = {
  ...makeEntity('Ritardando'),
  damageModifier: -0.5,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [
    makeCheck('talent'),
    makeCheck('talent'),
    makeCheck('talent'),
    makeCheck('talent'),
  ],
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
