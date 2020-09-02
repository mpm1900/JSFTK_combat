import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const SHOCKWAVE: SkillT = {
  ...makeEntity('Shockwave'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  rolls: [
    makeCheck('strength'),
    makeCheck('strength'),
    makeCheck('strength'),
    makeCheck('strength'),
  ],
  accuracy: makeCheck('strength', -10),
  perfectSplash: true,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [],
}
