import React from 'react'
import Color from 'color'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { StatsPreview } from '../StatsPreview'
import { Icon } from '../Icon'
import { ARMOR_TYPE_ICONS } from '../../icons/maps'
import { Button } from '../../elements/button'
import { tArmor } from '../../game/Armor/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { STAT_KEY_LABELS } from '../../game/Stats/constants'
import { SkillCheck } from '../SkillChecks'
import { Theme } from '../../theme'

export interface ArmorPreviewPropsT {
  armor: tArmor
  showEquipButton?: boolean
  showBuyButton?: boolean
  cost?: number
  onEquipClick?: () => void
  onBuyClick?: () => void
}
export const ArmorPreview = (props: ArmorPreviewPropsT) => {
  const {
    armor,
    showEquipButton,
    showBuyButton,
    cost,
    onEquipClick,
    onBuyClick,
  } = props
  const rarityColor = ITEM_RARITY_COLORS[armor.rarity]
  const from = Color(rarityColor).darken(0.5).rgb().toString()
  const to = Color(rarityColor).darken(0.7).rgb().toString()
  const gradient = `linear-gradient(180deg, ${from} 0%, ${to} 100%)`
  const skill = armor.skills[0]
  return (
    <BoxContainer
      style={{ minWidth: 240 }}
      substyle={{
        background: gradient,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <FlexContainer $direction='column' $full>
        <FullContainer />
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
        <FlexContainer $full style={{ marginBottom: 8 }}>
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
        <BoxContainer
          substyle={{
            background: 'rgba(0,0,0,0.7)',
            minHeight: 120,
            textAlign: 'left',
          }}
        >
          <FlexContainer $direction='column'>
            <FlexContainer
              style={{ justifyContent: 'space-between', marginBottom: 8 }}
            >
              <FlexContainer
                $full
                style={{
                  textTransform: 'capitalize',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    color: Theme.physicalColor,
                    fontSize: 24,
                    fontWeight: 'bolder',
                    marginRight: 8,
                  }}
                >
                  {armor.stats.armor}
                </div>
                <div>{STAT_KEY_LABELS.armor}</div>
              </FlexContainer>
              <FlexContainer
                $full
                style={{
                  textTransform: 'capitalize',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{
                    color: 'plum',
                    fontSize: 24,
                    fontWeight: 'bolder',
                    marginRight: 8,
                  }}
                >
                  <span>{armor.stats.resistance}</span>
                </span>
                {STAT_KEY_LABELS.resistance}
              </FlexContainer>
            </FlexContainer>
            {armor.skills.length > 0 && (
              <span style={{ color: 'plum', marginBottom: 8 }}>
                {armor.skills.map(
                  (skill, i) => `${i > 0 ? ', ' : ''}${skill.name}`,
                )}
              </span>
            )}
            <StatsPreview stats={{ ...armor.stats, armor: 0, resistance: 0 }} />
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
