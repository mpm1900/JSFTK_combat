import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { Button } from '../../elements/button'
import { SkillPreview } from '../SkillPreview'
import { SkillChecks } from '../SkillChecks'
import { PLAYER_PARTY_ID } from '../../objects/Party'
import { SKILL_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Hover } from '../Hover'

export const CombatActions = () => {
  const {
    activeCharacter,
    selectedSkill,
    selectedTargets,
    onSkillSelect,
  } = useCombatContext()

  if (
    !activeCharacter ||
    activeCharacter.partyId !== PLAYER_PARTY_ID ||
    !selectedSkill
  )
    return null

  return (
    <FlexContainer $direction='column' style={{ minWidth: 340 }}>
      {selectedSkill && <SkillChecks skill={selectedSkill} />}
      <FlexContainer style={{ justifyContent: 'center' }}>
        {activeCharacter.skills.map((skill) =>
          SKILL_ICONS[skill.id] ? (
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
                    skill.id === selectedSkill.id
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
          ),
        )}
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
