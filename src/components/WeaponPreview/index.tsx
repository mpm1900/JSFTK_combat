import React from 'react'
import Color from 'color'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { SkillCheck } from '../SkillChecks'
import { StatsPreview } from '../StatsPreview'
import { Button } from '../../elements/button'
import { tWeapon } from '../../game/Weapon/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { Icon } from '../Icon'
import { WEAPON_TYPE_ICONS } from '../../icons/maps'

export const getDamageColor = (weapon: tWeapon) => {
  if (weapon.damage.type === 'physical') return 'lightblue'
  if (weapon.damage.type === 'magic') return 'plum'
  return 'white'
}

export interface WeaponPreviewPropsT {
  weapon: tWeapon
  showEquipButton?: boolean
  showBuyButton?: boolean
  cost?: number
  onEquipClick?: () => void
  onBuyClick?: () => void
}
export const WeaponPreview = (props: WeaponPreviewPropsT) => {
  const {
    weapon,
    showEquipButton,
    showBuyButton,
    cost = 0,
    onEquipClick,
    onBuyClick,
  } = props
  const basicAttack = weapon.skills[0]
  const rarityColor = ITEM_RARITY_COLORS[weapon.rarity]
  const from = Color(rarityColor).darken(0.5).rgb().toString()
  const to = Color(rarityColor).darken(0.7).rgb().toString()
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  return (
    <BoxContainer style={{ width: 240 }} substyle={{ background: gradient }}>
      <FlexContainer $direction='column'>
        {basicAttack && (
          <FlexContainer style={{ justifyContent: 'center', marginBottom: 10 }}>
            {Array(basicAttack.rolls)
              .fill(null)
              .map((_, i) => (
                <SkillCheck
                  check={{ label: weapon.stat, result: true }}
                  size={18}
                  padding={4}
                  skill={weapon.skills[0]}
                />
              ))}
          </FlexContainer>
        )}
        <FlexContainer style={{ alignItems: 'center' }}>
          <Icon
            src={WEAPON_TYPE_ICONS[weapon.type]}
            size={32}
            style={{ marginRight: 10 }}
            shadow
          />
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
        <BoxContainer
          substyle={{
            background: 'rgba(0,0,0,0.7)',
            minHeight: 120,
            textAlign: 'left',
          }}
        >
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
                {weapon.damage.value}
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
            <StatsPreview stats={weapon.stats} />
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
