import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { STAT_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { tStats } from '../../game/Stats/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { STAT_BONUS_KEYS } from '../../game/Stats/constants'

const getStatColor = (
  character: tProcessedCharacter,
  key: keyof tStats,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a > b) return 'lightgreen'
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.6)'
}

export interface StatBarPropsT {
  character: tProcessedCharacter
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
              src={STAT_ICONS[key] || ''}
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
