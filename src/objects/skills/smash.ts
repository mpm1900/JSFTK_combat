import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const SMASH: SkillT = {
  ...makeEntity('Smash'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  rolls: [makeCheck('strength'), makeCheck('strength'), makeCheck('strength')],
  accuracy: makeCheck('strength'),
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [],
}