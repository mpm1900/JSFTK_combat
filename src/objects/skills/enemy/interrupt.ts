import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/makeCheck'

export const INTERRUPT: SkillT = {
  ...makeEntity('Interrupt'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [makeCheck('strength'), makeCheck('strength'), makeCheck('strength')],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [
    {
      type: 'dazed',
      duration: 2,
    },
  ],
}
