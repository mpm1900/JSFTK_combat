import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { Button } from '../../elements/button'
import { SkillPreview } from '../SkillPreview'
import { SkillChecks } from '../SkillChecks'
import { PLAYER_PARTY_ID } from '../../objects/Party'

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
      <FlexContainer style={{ justifyContent: 'space-around' }}>
        {activeCharacter.skills.map((skill) => (
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
