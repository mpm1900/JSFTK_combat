import React from 'react'
import { ArmorT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { combineTraits } from '../../functions'
import { StatsPreview } from '../StatsPreview'

export interface ArmorPreviewPropsT {
  armor: ArmorT
}
export const ArmorPreview = (props: ArmorPreviewPropsT) => {
  const { armor } = props
  const combinedTrait = combineTraits(...armor.traits)
  return (
    <BoxContainer>
      <FlexContainer $direction='column'>
        <strong>{armor.name}</strong>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>{armor.rarity}</span>
        <BoxContainer substyle={{ background: '#111' }}>
          <FlexContainer $direction='column'>
            <span style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
              {armor.skills.map(
                (skill, i) => `${i > 0 ? ', ' : ''}${skill.name}`,
              )}
            </span>
            <StatsPreview stats={combinedTrait.stats} />
          </FlexContainer>
        </BoxContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
