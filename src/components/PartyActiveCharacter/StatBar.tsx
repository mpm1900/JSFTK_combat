import React from 'react'
import { ProcessedCharacterT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { STAT_BONUS_KEYS } from '../../objects'
import { STATI_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'

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
              style={{ marginRight: 4 }}
            />
            {character.stats[key]}
          </FlexContainer>
        ))}
      </FlexContainer>
    </BoxContainer>
  )
}
