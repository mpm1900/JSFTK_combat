import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/makeCheck'

export const IMPALE: SkillT = {
  ...makeEntity('Impale'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  isBasicAttack: true,
  rolls: [makeCheck('strength'), makeCheck('strength'), makeCheck('strength')],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
