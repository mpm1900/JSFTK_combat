import React from 'react'
import { BoxContainer, BoxButton } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { getChecksProbability, getSkillDamage } from '../../functions'

export const CombatActions = () => {
  const {
    activeCharacter,
    selectedSkill,
    selectedTargets,
    onSkillSelect,
    next,
  } = useCombatContext()

  if (!activeCharacter) return null
  const perfectChance = selectedSkill
    ? getChecksProbability(activeCharacter, selectedSkill.rolls)
    : 0
  const rawAccuracyChance = selectedSkill
    ? getChecksProbability(activeCharacter, [selectedSkill.accuracy])
    : 0
  const accuracyChance = 1 - (1 - perfectChance) * (1 - rawAccuracyChance)
  const damage =
    selectedTargets.length > 0 && selectedSkill
      ? getSkillDamage(selectedSkill, activeCharacter, selectedTargets[0])
          .damage
      : 0
  return (
    <BoxContainer substyle={{ color: 'rgba(255,255,255,0.8)' }}>
      <h4 style={{ margin: '0 0 10px 0' }}>{activeCharacter.name}'s Turn</h4>
      <FlexContainer style={{ marginBottom: 10 }}>
        {activeCharacter.skills.map((skill) => (
          <BoxButton
            onClick={() => onSkillSelect(skill)}
            substyle={{
              borderColor:
                selectedSkill && skill.id === selectedSkill.id
                  ? 'white'
                  : undefined,
            }}
          >
            {skill.name}
          </BoxButton>
        ))}
      </FlexContainer>
      {selectedSkill && (
        <BoxContainer
          style={{ marginTop: 10 }}
          substyle={{ background: '#111' }}
        >
          <FlexContainer $direction='column'>
            <strong>Perect Chance: ({Math.floor(perfectChance * 100)}%)</strong>
            <strong>Accuracy: ({Math.floor(accuracyChance * 100)}%)</strong>
            {damage > 0 && <strong>Damage: {damage}</strong>}
          </FlexContainer>
        </BoxContainer>
      )}
      {selectedSkill && selectedTargets.length > 0 && (
        <BoxButton onClick={() => next()}>Confirm</BoxButton>
      )}
    </BoxContainer>
  )
}
