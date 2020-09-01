import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const SHOT: SkillT = {
  ...makeEntity('Shot'),
  // TODO Damage Modifier for flying, etc...
  damageModifier: 0,
  targetType: 'single',
  rolls: [
    makeCheck('perception'),
    makeCheck('perception'),
    makeCheck('perception'),
  ],
  accuracy: makeCheck('perception'),
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
