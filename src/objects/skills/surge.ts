import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const SURGE: SkillT = {
  ...makeEntity('Surge'),
  damageModifier: -0.2,
  targetType: 'single',
  damage: true,
  rolls: [
    makeCheck('intelligence'),
    makeCheck('intelligence'),
    makeCheck('intelligence'),
  ],
  accuracy: makeCheck('intelligence'),
  perfectSplash: false,
  perfectPierce: true,
  perfectStatus: [],
  perfectTags: [],
}
