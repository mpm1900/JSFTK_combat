import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { tSkill } from '../../game/Skill/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { getSkillDamage, getPerfectText } from '../../game/Skill/util'
import { getChecksProbability } from '../../game/Roll/util'
import { Theme } from '../../theme'
import { Icon } from '../Icon'
import { SKILL_ICONS } from '../../icons/maps'
import { Button } from '../../elements/button'

export interface SkillPreviewPropsT {
  skill: tSkill
  source: tProcessedCharacter
  targets?: tProcessedCharacter[]
  inspirationUsed?: number
  showInspirationActions?: boolean
  onInspirationClick?: () => void
}
export const SkillPreview = (props: SkillPreviewPropsT) => {
  const {
    skill,
    source,
    inspirationUsed = 0,
    showInspirationActions,
    onInspirationClick,
  } = props
  const perfectChance = getChecksProbability(
    source,
    Array(skill.rolls - inspirationUsed)
      .fill(null)
      .map((_, i) => ({ key: source.weapon.stat, offset: skill.offset })),
  )
  const stat = skill.weaponStatOverride || source.weapon.stat
  const damage = getSkillDamage(skill, source)
  const perfectKeys = getPerfectText(skill, source)
  return (
    <BoxContainer
      style={{ marginTop: 30, position: 'relative', minWidth: 300 }}
      substyle={{ background: Theme.darkBgColor }}
    >
      <FlexContainer $direction='column' style={{ alignItems: 'center' }}>
        <FlexContainer style={{ marginTop: -27 }}>
          <FullContainer />
          <BoxContainer
            substyle={{
              padding: '4px 12px',
              fontSize: 18,
              background: Theme.otherGrey,
              fontFamily: Theme.titleFont,
              textShadow: '1px 1px 3px black',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Icon
              src={SKILL_ICONS[skill.name]}
              size={16}
              style={{ marginRight: 8 }}
            />
            {skill.name}
          </BoxContainer>
          <FullContainer />
        </FlexContainer>
        <span
          style={{
            color: 'rgba(255,255,255,0.4)',
            marginTop: 8,
            marginBottom: 20,
            textAlign: 'center',
          }}
        >
          Perfect ({Math.floor(perfectChance * 100)}%){' '}
          {perfectKeys.length > 0 && '='} {perfectKeys}{' '}
          {inspirationUsed > 0 ? (
            <>
              <br />
              <span
                style={{
                  fontSize: 12,
                  color: '#f0e4c2',
                  fontWeight: 'bold',
                  marginTop: 8,
                  display: 'inline-block',
                }}
              >{`(${inspirationUsed} inspiration used.)`}</span>
            </>
          ) : (
            ''
          )}
        </span>
        {showInspirationActions && (
          <FlexContainer>
            <Button onClick={onInspirationClick}>
              Use Inspiration{' '}
              {inspirationUsed > 0 ? `(${inspirationUsed} used)` : ''}
            </Button>
          </FlexContainer>
        )}
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
                  fontFamily: 'New Rocker',
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
                  fontFamily: 'New Rocker',
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
        {skill.consumableId && (
          <div
            style={{
              color: Theme.healthRedColor,
              fontSize: 12,
              fontWeight: 'bolder',
              marginBottom: 8,
            }}
          >
            consumable
          </div>
        )}
        <FlexContainer style={{ marginBottom: -18 }}>
          <FullContainer />
          <BoxContainer
            substyle={{
              padding: '2px 8px',
              background: Theme.otherGrey,
              textShadow: '1px 1px 3px black',
              fontSize: 12,
            }}
          >
            {skill.targetType} target
          </BoxContainer>
          <FullContainer />
        </FlexContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
