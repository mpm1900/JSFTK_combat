import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const DAZE: SkillT = {
  ...makeEntity('Daze'),
  damageModifier: 0,
  targetType: 'single',
  damage: false,
  rolls: [
    makeCheck('intelligence'),
    makeCheck('intelligence'),
    makeCheck('intelligence'),
  ],
  accuracy: makeCheck('intelligence'),
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [{ type: 'dazed', duration: 4 }],
}
