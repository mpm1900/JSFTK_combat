import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const AREA_BLAST: SkillT = {
  ...makeEntity('Area Blast'),
  damageModifier: -0.5,
  targetType: 'group',
  damage: true,
  rolls: [
    makeCheck('intelligence'),
    makeCheck('intelligence'),
    makeCheck('intelligence'),
  ],
  accuracy: makeCheck('intelligence', -5),
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [],
}
