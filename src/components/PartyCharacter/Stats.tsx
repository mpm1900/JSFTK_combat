import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { styled } from 'styletron-react'
import { Icon } from '../Icon'
import { STAT_ICONS } from '../../icons/maps'
import { tProcessedCharacter } from '../../game/Character/type'
import { tBaseStats } from '../../game/Stats/type'
import { Theme } from '../../theme'
import { HoverToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'

interface CharacterStatPropsT {
  statKey: keyof tBaseStats
  character: tProcessedCharacter
}
const CharacterStat = (props: CharacterStatPropsT) => {
  const { statKey, character } = props
  return (
    <HoverToolTip
      flex
      content={
        <BoxContainer
          substyle={{
            textTransform: 'capitalize',
            background: Theme.darkBgColor,
          }}
        >
          {statKey}
        </BoxContainer>
      }
    >
      <ResourceE $color={getStatColor(character, statKey)}>
        <Icon
          src={STAT_ICONS[statKey] || ''}
          fill={getStatColor(character, statKey)}
          size={14}
          style={{ marginRight: 3, marginTop: 0 }}
        />
        {character.stats[statKey]}
      </ResourceE>
    </HoverToolTip>
  )
}

export interface StatsProps {
  character: tProcessedCharacter
}

export const Stats = (props: StatsProps) => {
  const { character } = props
  return (
    <FlexContainer
      $full
      style={{ paddingTop: 4, background: Theme.darkBgColor, paddingLeft: 42 }}
    >
      <CharacterStat statKey='vigor' character={character} />
      <CharacterStat statKey='strength' character={character} />
      <CharacterStat statKey='intelligence' character={character} />
      <CharacterStat statKey='dexterity' character={character} />
      <CharacterStat statKey='charisma' character={character} />
      <CharacterStat statKey='agility' character={character} />
      <CharacterStat statKey='luck' character={character} />
    </FlexContainer>
  )
}

const ResourceE = styled('div', (props: any) => ({
  height: 15,
  color: props.$color,
  fontSize: '15px',
  padding: '0px 4px',
  lineHeight: '14px',
  flex: 1,
  textAlign: 'center',
  background: Theme.darkBgColor,
  display: 'flex',
}))

const getStatColor = (
  character: tProcessedCharacter,
  key: keyof tBaseStats,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a > b) return Theme.evasionColor
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
}
