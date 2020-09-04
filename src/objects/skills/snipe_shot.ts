import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const SNIPE_SHOT: SkillT = {
  ...makeEntity('Snipe Shot'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  isBasicAttack: false,
  rolls: [
    makeCheck('perception', -10),
    makeCheck('perception', -10),
    makeCheck('perception', -10),
  ],
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
