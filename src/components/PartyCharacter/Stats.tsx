import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { withStyle } from 'styletron-react'
import { Monodiv } from '../../elements/monospace'
import { Icon } from '../Icon'
import { STAT_ICONS } from '../../icons/maps'
import { tProcessedCharacter } from '../../game/Character/type'
import { tStats, tBaseStats } from '../../game/Stats/type'

interface CharacterStatPropsT {
  statKey: keyof tBaseStats
  character: tProcessedCharacter
}
const CharacterStat = (props: CharacterStatPropsT) => {
  const { statKey, character } = props
  return (
    <ResourceE $color={getStatColor(character, statKey)}>
      <Icon
        src={STAT_ICONS[statKey] || ''}
        fill={getStatColor(character, statKey)}
        size={14}
        style={{ marginRight: 4 }}
      />
      {character.stats[statKey]}
    </ResourceE>
  )
}

export interface StatsProps {
  character: tProcessedCharacter
}

export const Stats = (props: StatsProps) => {
  const { character } = props
  return (
    <FlexContainer>
      <CharacterStat statKey='strength' character={character} />
      <CharacterStat statKey='vigor' character={character} />
      <CharacterStat statKey='intelligence' character={character} />
      <CharacterStat statKey='dexterity' character={character} />
      <CharacterStat statKey='charisma' character={character} />
      <CharacterStat statKey='agility' character={character} />
      <CharacterStat statKey='luck' character={character} />
    </FlexContainer>
  )
}

const ResourceE = withStyle(Monodiv, (props: any) => ({
  height: 15,
  color: props.$color,
  fontSize: '12px',
  fontWeight: 'bolder',
  padding: '0px 4px',
  lineHeight: '15px',
  flex: 1,
  textAlign: 'center',
  background: '#111',
  display: 'flex',
}))

const getStatColor = (
  character: tProcessedCharacter,
  key: keyof tBaseStats,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a > b) return 'lightgreen'
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
}