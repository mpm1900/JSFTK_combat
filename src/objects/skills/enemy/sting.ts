import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/makeCheck'

export const STING: SkillT = {
  ...makeEntity('Sting'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [
    makeCheck('perception'),
    makeCheck('perception'),
    makeCheck('perception'),
  ],
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}

export const INFECTIOUS_STING: SkillT = {
  ...makeEntity('Infectious Sting'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [
    makeCheck('perception', -10),
    makeCheck('perception', -10),
    makeCheck('perception', -10),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [
    {
      type: 'poisoned',
      duration: 10,
    },
  ],
}
