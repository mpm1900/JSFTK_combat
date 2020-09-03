import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const SHOT: SkillT = {
  ...makeEntity('Shot'),
  // TODO Damage Modifier for flying, etc...
  damageModifier: 0,
  targetType: 'single',
  damage: true,
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
