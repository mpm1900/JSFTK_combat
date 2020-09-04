import { SkillT } from '../../../types'
import { makeEntity } from '../../../functions/Entity'
import { makeCheck } from '../../../functions/makeCheck'

export const BLEED: SkillT = {
  ...makeEntity('Bleed'),
  damageModifier: 0,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: true,
  rolls: [makeCheck('strength'), makeCheck('strength'), makeCheck('strength')],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [
    {
      type: 'bleeding',
      duration: 10,
    },
  ],
}