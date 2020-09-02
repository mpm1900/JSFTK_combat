import { CharacterT } from '../../types'
import { makeEntity } from '../../functions/Entity'
import { BITE } from '../skills/enemy/bite'

export const TIMBERWOLF = (): CharacterT => {
  return {
    ...makeEntity('Timberwolf'),
    isCharacter: true,
    partyId: '',
    level: 1,
    class: 'enemy',
    stats: {
      vigor: -80,
      strength: 52,
      intelligence: 40,
      perception: 52,
      talent: 30,
      agility: 60,
      luck: 50,
      armor: 0,
      resistance: 0,
      evasion: 10,
      healthOffset: 0,
      criticalChance: 5,
      damageModifier: 0,
    },
    traits: [],
    tags: [],
    armor: [],
    status: [],
    weapon: {
      ...makeEntity('Wolf Fangs'),
      rarity: 'common',
      type: 'wolf-fangs',
      hands: 2,
      damage: {
        damage: 6,
        type: 'physical',
      },
      traits: [],
      skills: [BITE],
    },
  }
}
