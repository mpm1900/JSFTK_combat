import React from 'react'
import Color from 'color'
import { ProcessedWeaponT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { SkillCheck } from '../SkillChecks'
import { combineTraits } from '../../functions'
import { StatsPreview } from '../StatsPreview'
import { ITEM_RARITY_COLORS } from '../../objects/Item'
import { Button } from '../../elements/button'

export const getDamageColor = (weapon: ProcessedWeaponT) => {
  if (weapon.damage.type === 'physical') return 'lightblue'
  if (weapon.damage.type === 'magic') return 'plum'
  return 'white'
}

export interface WeaponPreviewPropsT {
  weapon: ProcessedWeaponT
  showEquipButton?: boolean
  onEquipClick?: () => void
}
export const WeaponPreview = (props: WeaponPreviewPropsT) => {
  const { weapon, showEquipButton, onEquipClick } = props
  const basicAttack = weapon.skills.find((s) => s.isBasicAttack)
  const combinedTrait = combineTraits(...weapon.traits)
  const rarityColor = ITEM_RARITY_COLORS[weapon.rarity]
  const from = Color(rarityColor).darken(0.5).rgb().toString()
  const to = Color(rarityColor).darken(0.7).rgb().toString()
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  return (
    <BoxContainer style={{ width: 240 }} substyle={{ background: gradient }}>
      <FlexContainer $direction='column'>
        {basicAttack && (
          <FlexContainer style={{ justifyContent: 'center', marginBottom: 10 }}>
            {basicAttack.rolls.map((roll) => (
              <SkillCheck
                check={{ label: roll.key || 'strength', result: true }}
                size={18}
                padding={4}
              />
            ))}
          </FlexContainer>
        )}
        <FlexContainer>
          <FlexContainer
            $direction='column'
            style={{
              margin: '8px 0',
              textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
            }}
          >
            <span style={{ fontWeight: 600 }}>{weapon.name}</span>
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>
              {weapon.rarity} {weapon.type}
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
            <FlexContainer style={{ lineHeight: '24px', marginBottom: 4 }}>
              <span
                style={{
                  color: getDamageColor(weapon),
                  fontWeight: 'bolder',
                  marginRight: 8,
                  fontSize: 24,
                }}
              >
                {weapon.damage.damage}
              </span>
              <span style={{ textTransform: 'capitalize' }}>
                {weapon.damage.type} Damage
              </span>
            </FlexContainer>
            <span style={{ color: 'plum', marginBottom: 8 }}>
              {weapon.skills.map(
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
