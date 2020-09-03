import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { SkillT, ProcessedCharacterT } from '../../types'
import {
  getChecksProbability,
  getSkillDamageRange,
  getSkillDamage,
  getPerfectKeys,
  getPerfectText,
} from '../../functions'

export interface SkillPreviewPropsT {
  skill: SkillT
  source: ProcessedCharacterT
  targets: ProcessedCharacterT[]
}
export const SkillPreview = (props: SkillPreviewPropsT) => {
  const { skill, source, targets } = props
  const perfectChance = getChecksProbability(source, skill.rolls)
  const damage = getSkillDamage(skill, source)
  const damageString = getSkillDamageRange(
    skill,
    source,
    targets.length === 0 ? undefined : targets,
  )
  const perfectKeys = getPerfectText(skill, source)
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
              fontWeight: 'bolder',
            }}
          >
            {skill.name}
          </BoxContainer>
          <FullContainer />
        </FlexContainer>
        <span style={{ color: 'rgba(255,255,255,0.4)', marginTop: 8 }}>
          Perect ({Math.floor(perfectChance * 100)}%){' '}
          {perfectKeys.length > 0 && '='} {perfectKeys}
        </span>
        <FlexContainer $full style={{ width: '100%', marginBottom: 8 }}>
          {damage.damage > 0 && (
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
                {damageString}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.2)' }}>MAX DMG</span>
            </FlexContainer>
          )}
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
              {source.stats[skill.rolls[0].key || 'strength'] +
                (skill.rolls[0].offset || 0)}
              %
            </span>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>
              Per Check ACC
            </span>
          </FlexContainer>
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
