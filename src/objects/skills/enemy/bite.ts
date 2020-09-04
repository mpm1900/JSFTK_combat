import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/makeCheck'

export const BITE: SkillT = {
  ...makeEntity('Bite'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  isBasicAttack: true,
  rolls: [
    makeCheck('perception'),
    makeCheck('perception'),
    makeCheck('perception'),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [],
}