import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const ALTO: SkillT = {
  ...makeEntity('Alto'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [makeCheck('talent'), makeCheck('talent'), makeCheck('talent')],
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
