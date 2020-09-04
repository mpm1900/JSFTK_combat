import React from 'react'
import { ArmorT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { combineTraits } from '../../functions'
import { StatsPreview } from '../StatsPreview'
import { Icon } from '../Icon'
import { ARMOR_TYPE_ICONS } from '../../icons/maps'

export interface ArmorPreviewPropsT {
  armor: ArmorT
}
export const ArmorPreview = (props: ArmorPreviewPropsT) => {
  const { armor } = props
  const combinedTrait = combineTraits(...armor.traits)
  return (
    <BoxContainer style={{ width: 200 }}>
      <FlexContainer $direction='column'>
        <FlexContainer>
          <Icon
            src={ARMOR_TYPE_ICONS[armor.type]}
            size={32}
            style={{ marginRight: 10 }}
          />
          <FlexContainer $direction='column'>
            <strong>{armor.name}</strong>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>
              {armor.rarity}
            </span>
          </FlexContainer>
        </FlexContainer>
        <BoxContainer substyle={{ background: '#111' }}>
          <FlexContainer $direction='column'>
            <span style={{ color: 'plum', marginBottom: 8 }}>
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
