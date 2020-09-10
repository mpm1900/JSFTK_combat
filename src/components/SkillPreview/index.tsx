import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { tSkill } from '../../game/Skill/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { getSkillDamage, getPerfectText } from '../../game/Skill/util'
import { getChecksProbability } from '../../game/Roll/util'

export interface SkillPreviewPropsT {
  skill: tSkill
  source: tProcessedCharacter
  targets: tProcessedCharacter[]
}
export const SkillPreview = (props: SkillPreviewPropsT) => {
  const { skill, source, targets } = props
  const perfectChance = getChecksProbability(
    source,
    Array(skill.rolls)
      .fill(null)
      .map((_, i) => ({ key: source.weapon.stat, offset: skill.offset })),
  )
  const stat = skill.weaponStatOverride || source.weapon.stat
  const damage = getSkillDamage(skill, source)
  const perfectKeys = getPerfectText(skill, source)
  if (damage.value === 0) {
    console.log('ZERO DAMGE', skill.name, skill, source)
  }
  return (
    <BoxContainer
      style={{ marginTop: 30, position: 'relative' }}
      substyle={{ background: '#111' }}
    >
      <FlexContainer $direction='column' style={{ alignItems: 'center' }}>
        <FlexContainer style={{ marginTop: -27 }}>
          <FullContainer />
          <BoxContainer
            substyle={{
              padding: '4px 12px',
              background: '#555',
              letterSpacing: '1px',
              fontFamily: 'Bangers',
            }}
          >
            {skill.name}
          </BoxContainer>
          <FullContainer />
        </FlexContainer>
        <span
          style={{
            color: 'rgba(255,255,255,0.4)',
            marginTop: 8,
            marginBottom: 8,
          }}
        >
          Perfect ({Math.floor(perfectChance * 100)}%){' '}
          {perfectKeys.length > 0 && '='} {perfectKeys}
        </span>
        <FlexContainer $full style={{ width: '100%', marginBottom: 8 }}>
          {damage.value > 0 && skill.damage && (
            <FlexContainer
              $full
              $direction='column'
              style={{ alignItems: 'center', marginRight: 10 }}
            >
              <span
                style={{
                  color: damage.type === 'physical' ? 'lightblue' : 'plum',
                  fontWeight: 'bolder',
                  fontSize: 32,
                }}
              >
                {`${Math.floor(damage.value)}`}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>Max DMG</span>
            </FlexContainer>
          )}
          {skill.rolls > 0 && (
            <FlexContainer
              $full
              $direction='column'
              style={{ alignItems: 'center' }}
            >
              <span
                style={{
                  fontWeight: 'bolder',
                  fontSize: 32,
                }}
              >
                {source.stats[stat] + skill.offset}%
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>
                Per Check ACC
              </span>
            </FlexContainer>
          )}
        </FlexContainer>
        <FlexContainer style={{ marginBottom: -18 }}>
          <FullContainer />
          <BoxContainer
            substyle={{ padding: '0px 12px', background: '#555', fontSize: 10 }}
          >
            {skill.targetType}
          </BoxContainer>
          <FullContainer />
        </FlexContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
