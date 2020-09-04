import React from 'react'
import Color from 'color'
import { ArmorT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { combineTraits } from '../../functions'
import { StatsPreview } from '../StatsPreview'
import { Icon } from '../Icon'
import { ARMOR_TYPE_ICONS } from '../../icons/maps'
import { ITEM_RARITY_COLORS } from '../../objects/Item'

export interface ArmorPreviewPropsT {
  armor: ArmorT
}
export const ArmorPreview = (props: ArmorPreviewPropsT) => {
  const { armor } = props
  const combinedTrait = combineTraits(...armor.traits)
  const rarityColor = ITEM_RARITY_COLORS[armor.rarity]
  const from = Color(rarityColor).darken(0.5).rgb().toString()
  const to = Color(rarityColor).darken(0.7).rgb().toString()
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  console.log(gradient)
  return (
    <BoxContainer style={{ width: 200 }} substyle={{ background: gradient }}>
      <FlexContainer $direction='column'>
        <FlexContainer style={{ marginBottom: 8 }}>
          <Icon
            src={ARMOR_TYPE_ICONS[armor.type]}
            size={32}
            style={{ marginRight: 10 }}
          />
          <FlexContainer
            $direction='column'
            style={{ textShadow: '2px 2px 2px rgba(0,0,0,0.5)' }}
          >
            <span style={{ fontWeight: 600 }}>{armor.name}</span>
            <span style={{ color: 'rgba(255,255,255,0.5)' }}>
              {armor.rarity}
            </span>
          </FlexContainer>
        </FlexContainer>
        <BoxContainer substyle={{ background: 'rgba(0,0,0,0.7)' }}>
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
