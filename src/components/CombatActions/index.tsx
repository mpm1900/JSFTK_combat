import React from 'react'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { getChecksProbability, getSkillDamageRange } from '../../functions'
import { Button } from '../../elements/button'
import { PLAYER_PARTY_ID } from '../../state/party'
import { SkillPreview } from '../SkillPreview'
import { SkillChecks } from '../SkillChecks'

export const CombatActions = () => {
  const {
    activeCharacter,
    selectedSkill,
    selectedTargets,
    onSkillSelect,
  } = useCombatContext()

  if (!activeCharacter || activeCharacter.partyId !== PLAYER_PARTY_ID)
    return null
  return (
    <BoxContainer substyle={{ color: 'rgba(255,255,255,0.8)', minWidth: 300 }}>
      <h2 style={{ marginTop: 0, textAlign: 'center' }}>
        {!selectedSkill
          ? 'Choose a Skill'
          : selectedTargets.length === 0
          ? 'Choose a Target'
          : 'Confirm Action'}
      </h2>
      {selectedSkill && <SkillChecks skill={selectedSkill} />}
      <FlexContainer style={{ justifyContent: 'space-around' }}>
        {activeCharacter.skills.map((skill) => (
          <Button
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
    </BoxContainer>
  )
}
