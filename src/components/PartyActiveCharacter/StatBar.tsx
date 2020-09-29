import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { STAT_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { tStats } from '../../game/Stats/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { STAT_BONUS_KEYS } from '../../game/Stats/constants'
import { HoverToolTip } from '../Tooltip'
import { Theme } from '../../theme'

const getStatColor = (
  character: tProcessedCharacter,
  key: keyof tStats,
): string => {
  const a = character.stats[key]
  const b = character.rawStats[key]
  if (a === undefined || b === undefined) return 'rgba(255,255,255,0.8)'
  if (a > b) return 'lightgreen'
  if (b > a) return 'lightcoral'
  return 'rgba(255,255,255,0.8)'
}

export interface StatBarPropsT {
  character: tProcessedCharacter
}
export const StatBar = (props: StatBarPropsT) => {
  const { character } = props

  return (
    <FlexContainer
      style={{
        justifyContent: 'space-between',
        width: 360,
        padding: 16,
        paddingTop: 24,
        margin: 1,
        border: `1px solid ${Theme.lightBgColor}`,
      }}
    >
      {STAT_BONUS_KEYS.map((key) => (
        <HoverToolTip content={<BoxContainer dark>{key}</BoxContainer>}>
          <FlexContainer
            key={key}
            style={{
              alignItems: 'center',
              userSelect: 'none',
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
        </HoverToolTip>
      ))}
    </FlexContainer>
  )
}
