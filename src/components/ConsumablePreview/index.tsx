import React from 'react'
import Color from 'color'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Icon } from '../Icon'
import { CONSUMABLE_ITEM_ICONS } from '../../icons/maps'
import { Button } from '../../elements/button'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { SkillCheck } from '../SkillChecks'
import { tConsumable } from '../../game/Consumable/type'

export interface ConsumablePreviewPropsT {
  item: tConsumable
  showEquipButton?: boolean
  showBuyButton?: boolean
  cost?: number
  onEquipClick?: () => void
  onBuyClick?: () => void
}
export const ConsumablePreview = (props: ConsumablePreviewPropsT) => {
  const { item, showBuyButton, cost, onBuyClick } = props
  const rarityColor = ITEM_RARITY_COLORS[item.rarity]
  const from = Color(rarityColor).darken(0.5).rgb().toString()
  const to = Color(rarityColor).darken(0.7).rgb().toString()
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  const skill = item.skill
  return (
    <BoxContainer style={{ minWidth: 240 }} substyle={{ background: gradient }}>
      <FlexContainer $direction='column'>
        {skill && (
          <FlexContainer style={{ justifyContent: 'center', marginBottom: 10 }}>
            {Array(skill.rolls)
              .fill(null)
              .map((_, i) => (
                <SkillCheck
                  check={{
                    label: skill.weaponStatOverride || 'strength',
                    result: true,
                  }}
                  size={18}
                  padding={4}
                  skill={skill}
                />
              ))}
          </FlexContainer>
        )}
        <FlexContainer style={{ marginBottom: 8 }}>
          <Icon
            src={CONSUMABLE_ITEM_ICONS[item.id]}
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
            <span style={{ fontWeight: 600 }}>{item.name}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>
              {item.rarity}
            </span>
          </FlexContainer>
          <FullContainer />
        </FlexContainer>
        <BoxContainer
          substyle={{
            background: 'rgba(0,0,0,0.7)',
            minHeight: 120,
            textAlign: 'left',
          }}
        >
          <FlexContainer $direction='column'>
            <span style={{ color: 'plum', marginBottom: 8 }}>{skill.name}</span>
          </FlexContainer>
        </BoxContainer>
        {showBuyButton && (
          <FlexContainer style={{ justifyContent: 'center', marginTop: 10 }}>
            <Button onClick={onBuyClick} style={{ padding: '4px 16px' }}>
              Buy ({cost || 0})
            </Button>
          </FlexContainer>
        )}
      </FlexContainer>
    </BoxContainer>
  )
}
