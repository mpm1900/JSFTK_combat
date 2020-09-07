import { SkillT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { makeCheck } from '../../functions/makeCheck'

export const STUN_ATTACK: SkillT = {
  ...makeEntity('Stun Attack'),
  damageModifier: -0.5,
  targetType: 'single',
  damage: true,
  healing: false,
  isBasicAttack: false,
  rolls: [
    makeCheck('strength', -10),
    makeCheck('strength', -10),
    makeCheck('strength', -10),
  ],
  perfectSplash: false,
  perfectPierce: false,
  perfectStatus: [{ type: 'dazed', duration: 6 }],
  targetQueueOffset: 0,
  targetQueueSet: undefined,
}

export const DAZE = {
  ...STUN_ATTACK,
  name: 'Daze',
}
