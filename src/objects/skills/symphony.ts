import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const SYMPHONY: SkillT = {
  ...makeEntity('Ritardando'),
  damageModifier: -0.4,
  targetType: 'group',
  damage: true,
  healing: false,
  isBasicAttack: false,
  rolls: [
    makeCheck('talent', -4),
    makeCheck('talent', -4),
    makeCheck('talent', -4),
    makeCheck('talent', -4),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
