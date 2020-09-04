import React from 'react'
import Color from 'color'
import { ArmorT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { combineTraits } from '../../functions'
import { StatsPreview } from '../StatsPreview'
import { Icon } from '../Icon'
import { ARMOR_TYPE_ICONS } from '../../icons/maps'
import { ITEM_RARITY_COLORS } from '../../objects/Item'
import { Button } from '../../elements/button'

export interface ArmorPreviewPropsT {
  armor: ArmorT
  showEquipButton?: boolean
  onEquipClick?: () => void
}
export const ArmorPreview = (props: ArmorPreviewPropsT) => {
  const { armor, showEquipButton, onEquipClick } = props
  const combinedTrait = combineTraits(...armor.traits)
  const rarityColor = ITEM_RARITY_COLORS[armor.rarity]
  const from = Color(rarityColor).darken(0.5).rgb().toString()
  const to = Color(rarityColor).darken(0.7).rgb().toString()
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  return (
    <BoxContainer style={{ minWidth: 200 }} substyle={{ background: gradient }}>
      <FlexContainer $direction='column'>
        <FlexContainer style={{ marginBottom: 8 }}>
          <Icon
            src={ARMOR_TYPE_ICONS[armor.type]}
            size={32}
            style={{ marginRight: 10 }}
            shadow
          />
          <FlexContainer
            $direction='column'
            style={{
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            <span style={{ fontWeight: 600 }}>{armor.name}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>
              {armor.rarity}
            </span>
          </FlexContainer>
          <FullContainer />
          {showEquipButton && (
            <div style={{ marginLeft: 10 }}>
              <Button onClick={onEquipClick} style={{ padding: 4 }}>
                Equip
              </Button>
            </div>
          )}
        </FlexContainer>
        <BoxContainer substyle={{ background: 'rgba(0,0,0,0.7)' }}>
          <FlexContainer $direction='column'>
            {armor.skills.length > 0 && (
              <span style={{ color: 'plum', marginBottom: 8 }}>
                {armor.skills.map(
                  (skill, i) => `${i > 0 ? ', ' : ''}${skill.name}`,
                )}
              </span>
            )}
            <StatsPreview stats={combinedTrait.stats} />
          </FlexContainer>
        </BoxContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
