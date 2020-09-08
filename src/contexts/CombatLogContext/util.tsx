import React from 'react'
import { tSkill } from '../../game/Skill/type'
import { tParty } from '../../game/Party/type'
import { tCharacter } from '../../game/Character/type'

export const Span = (color: string, text: JSX.Element | string) => (
  <span style={{ color, fontWeight: 'bold' }}>{text}</span>
)
export const SkillSpan = (skill: tSkill) => Span('plum', skill.name)

export const NameSpanBuilder = (party: tParty, enemyParty: tParty) => (
  character: tCharacter,
) => {
  const isUserParty = character.partyId === party.id
  const isEnemyParty = character.partyId === enemyParty.id
  const color = isUserParty
    ? 'lightgreen'
    : isEnemyParty
    ? 'lightsalmon'
    : 'white'

  return Span(color, character.name)
}
