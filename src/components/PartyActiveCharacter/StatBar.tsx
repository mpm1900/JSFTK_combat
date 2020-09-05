import React from 'react'
import { ProcessedCharacterT, StatsT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { STAT_BONUS_KEYS } from '../../objects'
import { STATI_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'

const getStatColor = (
  character: ProcessedCharacterT,
  key: keyof StatsT,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a > b) return 'lightgreen'
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
}

export interface StatBarPropsT {
  character: ProcessedCharacterT
}
export const StatBar = (props: StatBarPropsT) => {
  const { character } = props

  return (
    <BoxContainer>
      <FlexContainer
        style={{
          justifyContent: 'space-between',
          width: 360,
          paddingTop: 10,
          paddingBottom: 6,
        }}
      >
        {STAT_BONUS_KEYS.map((key) => (
          <FlexContainer
            key={key}
            style={{
              alignItems: 'center',
            }}
          >
            <Icon
              src={STATI_ICONS[key] || ''}
              size={20}
              fill={getStatColor(character, key)}
              style={{ marginRight: 4 }}
            />
            <span style={{ color: getStatColor(character, key) }}>
              {character.stats[key]}
            </span>
          </FlexContainer>
        ))}
      </FlexContainer>
    </BoxContainer>
  )
}
