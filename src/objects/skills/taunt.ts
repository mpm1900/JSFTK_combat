import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/Roll'

export const TAUNT: SkillT = {
  ...makeEntity('Taunt'),
  damageModifier: -1,
  targetType: 'self',
  damage: false,
  rolls: [makeCheck('vigor'), makeCheck('vigor')],
  accuracy: undefined,
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
