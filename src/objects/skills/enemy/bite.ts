import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/Roll'

export const BITE: SkillT = {
  ...makeEntity('Bite'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  rolls: [
    makeCheck('perception'),
    makeCheck('perception'),
    makeCheck('perception'),
  ],
  accuracy: makeCheck('perception'),
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [],
}
