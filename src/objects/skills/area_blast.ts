import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const AREA_BLAST: SkillT = {
  ...makeEntity('Area Blast'),
  damageModifier: -0.5,
  targetType: 'group',
  damage: true,
  healing: false,
  isBasicAttack: false,
  rolls: [
    makeCheck('intelligence', -5),
    makeCheck('intelligence', -5),
    makeCheck('intelligence', -5),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
}
