import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const SNIPE_SHOT: SkillT = {
  ...makeEntity('Snipe Shot'),
  damageModifier: 0,
  targetType: 'single',
  rolls: [
    makeCheck('perception'),
    makeCheck('perception'),
    makeCheck('perception'),
  ],
  accuracy: makeCheck('perception', -10),
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
}
