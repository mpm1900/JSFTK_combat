import React from 'react'
import { CharacterT, PartyT, SkillT } from '../../types'

export const Span = (color: string, text: JSX.Element | string) => (
  <span style={{ color, fontWeight: 'bold' }}>{text}</span>
)
export const SkillSpan = (skill: SkillT) => Span('plum', skill.name)

export const NameSpanBuilder = (party: PartyT, enemyParty: PartyT) => (
  character: CharacterT,
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
