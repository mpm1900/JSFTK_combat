import React from 'react'
import { ProcessedWeaponT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { SkillCheck } from '../SkillChecks'
import { combineTraits } from '../../functions'
import { StatsPreview } from '../StatsPreview'

export const getDamageColor = (weapon: ProcessedWeaponT) => {
  if (weapon.damage.type === 'physical') return 'lightblue'
  if (weapon.damage.type === 'magic') return 'plum'
  return 'white'
}

export interface WeaponPreviewPropsT {
  weapon: ProcessedWeaponT
}
export const WeaponPreview = (props: WeaponPreviewPropsT) => {
  const { weapon } = props
  const basicAttack = weapon.skills.find((s) => s.isBasicAttack)
  const combinedTrait = combineTraits(...weapon.traits)
  return (
    <BoxContainer style={{ width: 200 }}>
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
        <FlexContainer $direction='column' style={{ margin: '8px 0' }}>
          <strong>{weapon.name}</strong>
          <span style={{ color: 'rgba(255,255,255,0.3)' }}>
            {weapon.rarity}
          </span>
        </FlexContainer>
        <BoxContainer substyle={{ background: '#111' }}>
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
