import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { Button } from '../../elements/button'
import { SkillPreview } from '../SkillPreview'
import { SkillChecks } from '../SkillChecks'
import { SKILL_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Hover } from '../Hover'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { HEAL } from '../../game/Skill/objects/heal'

export const CombatActions = () => {
  const {
    activeCharacter,
    selectedSkill,
    selectedTargets,
    onSkillSelect,
  } = useCombatContext()

  if (!activeCharacter || activeCharacter.partyId !== PLAYER_PARTY_ID)
    return null

  const stat = selectedSkill?.weaponStatOverride || activeCharacter.weapon.stat
  const skills = activeCharacter.skills.filter((skill) => {
    if (activeCharacter.healthOffset === 0 && skill.id === HEAL('').id) {
      return false
    } else {
      return true
    }
  })
  return (
    <FlexContainer $direction='column' style={{ minWidth: 340 }}>
      {selectedSkill && <SkillChecks stat={stat} skill={selectedSkill} />}
      <FlexContainer style={{ justifyContent: 'center', minHeight: 42 }}>
        {skills.map((skill) => (
          <React.Fragment key={skill.id}>
            {SKILL_ICONS[skill.id] ? (
              <Hover delay={0}>
                {({ isHovering }) => (
                  <Icon
                    src={SKILL_ICONS[skill.id]}
                    size={42}
                    shadow={true}
                    style={{
                      cursor: 'pointer',
                      padding: '0 12px',
                    }}
                    onClick={() => onSkillSelect(skill)}
                    fill={
                      skill.id === selectedSkill?.id
                        ? 'lightsalmon'
                        : isHovering
                        ? 'white'
                        : 'rgba(255,255,255,0.8)'
                    }
                  />
                )}
              </Hover>
            ) : (
              <Button
                key={skill.id}
                onClick={() => onSkillSelect(skill)}
                style={{
                  background: '#111',
                  borderColor:
                    selectedSkill && skill.id === selectedSkill.id
                      ? 'white'
                      : undefined,
                }}
              >
                {skill.name}
              </Button>
            )}
          </React.Fragment>
        ))}
      </FlexContainer>
      {selectedSkill && (
        <SkillPreview
          skill={selectedSkill}
          source={activeCharacter}
          targets={selectedTargets}
        />
      )}
    </FlexContainer>
  )
}
