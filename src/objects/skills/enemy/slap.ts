import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/makeCheck'

export const SLAP: SkillT = {
  ...makeEntity('Slap'),
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