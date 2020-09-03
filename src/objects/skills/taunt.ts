import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const TAUNT: SkillT = {
  ...makeEntity('Taunt'),
  damageModifier: 0,
  targetType: 'self',
  damage: false,
  isBasicAttack: false,
  rolls: [makeCheck('vigor'), makeCheck('vigor')],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [],
  perfectTags: [
    {
      type: 'targeted',
      duration: 5,
    },
  ],
}
