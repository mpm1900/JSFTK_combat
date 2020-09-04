import React from 'react'
import { ProcessedWeaponT } from '../../types'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { SkillCheck } from '../SkillChecks'
import { combineTraits } from '../../functions'
import {
  DEFENSE_BONUS_KEYS,
  STAT_KEY_LABELS,
  DAMAGE_BONUS_KEYS,
  STAT_BONUS_KEYS,
} from '../../objects/Stats'

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
    <BoxContainer>
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
        <strong>{weapon.name}</strong>
        <span style={{ color: 'rgba(255,255,255,0.3)' }}>{weapon.rarity}</span>
        <BoxContainer substyle={{ background: '#111' }}>
          <FlexContainer $direction='column'>
            <FlexContainer style={{ lineHeight: '24px' }}>
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
            <span style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
              {weapon.skills.map(
                (skill, i) => `${i > 0 ? ', ' : ''}${skill.name}`,
              )}
            </span>
            <FlexContainer $direction='column' style={{ fontSize: 14 }}>
              {DEFENSE_BONUS_KEYS.map(
                (key) =>
                  combinedTrait.stats[key] > 0 && (
                    <span style={{ textTransform: 'capitalize' }}>
                      +{combinedTrait.stats[key]}
                      {STAT_KEY_LABELS[key]}
                    </span>
                  ),
              )}
              {DAMAGE_BONUS_KEYS.map(
                (key) =>
                  combinedTrait.stats[key] > 0 && (
                    <span style={{ textTransform: 'capitalize' }}>
                      +{combinedTrait.stats[key]}
                      {STAT_KEY_LABELS[key]}
                    </span>
                  ),
              )}
              {STAT_BONUS_KEYS.map(
                (key) =>
                  combinedTrait.stats[key] > 0 && (
                    <span
                      style={{
                        textTransform: 'capitalize',
                        color: 'lightblue',
                      }}
                    >
                      +{combinedTrait.stats[key]}
                      {STAT_KEY_LABELS[key]}
                    </span>
                  ),
              )}
              {STAT_BONUS_KEYS.map(
                (key) =>
                  combinedTrait.stats[key] < 0 && (
                    <span
                      style={{
                        textTransform: 'capitalize',
                        color: 'lightcoral',
                      }}
                    >
                      {combinedTrait.stats[key]}
                      {STAT_KEY_LABELS[key]}
                    </span>
                  ),
              )}
            </FlexContainer>
          </FlexContainer>
        </BoxContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
