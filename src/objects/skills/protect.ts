import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const PROTECT: SkillT = {
  ...makeEntity('Protect'),
  damageModifier: 0,
  targetType: 'ally',
  damage: false,
  healing: false,
  isBasicAttack: false,
  rolls: [makeCheck('intelligence'), makeCheck('intelligence')],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [
    {
      type: 'protected',
      duration: -1,
    },
  ],
}
