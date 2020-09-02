import React from 'react'
import { BoxContainer, BoxButton } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import {
  getChecksProbability,
  getSkillDamage,
  getSkillDamageRange,
} from '../../functions'
import { Button } from '../../elements/button'

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
    ? selectedSkill.accuracy
      ? getChecksProbability(activeCharacter, [selectedSkill.accuracy])
      : 1
    : 0
  const accuracyChance = 1 - (1 - perfectChance) * (1 - rawAccuracyChance)
  const damage = selectedSkill
    ? getSkillDamageRange(
        selectedSkill,
        activeCharacter,
        selectedTargets.length === 0 ? undefined : selectedTargets,
      )
    : '0'
  return (
    <BoxContainer substyle={{ color: 'rgba(255,255,255,0.8)', minWidth: 300 }}>
      <h2 style={{ marginTop: 0, textAlign: 'center' }}>
        {!selectedSkill
          ? 'Choose a Skill'
          : selectedTargets.length === 0
          ? 'Choose a Target'
          : 'Confirm Action'}
      </h2>
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
        <BoxContainer
          style={{ marginTop: 10 }}
          substyle={{ background: '#111' }}
        >
          <FlexContainer $direction='column' style={{ alignItems: 'center' }}>
            <span>Target: {selectedSkill.targetType}</span>
            <span>Perect: ({Math.floor(perfectChance * 100)}%)</span>
            <span>Accuracy: ({Math.floor(accuracyChance * 100)}%)</span>
            <span>
              Per Check ACC: (
              {activeCharacter.stats[selectedSkill.rolls[0].key || 'strength']}
              %)
            </span>
            {damage !== '0' && <span>Base Damage: ({damage})</span>}
          </FlexContainer>
        </BoxContainer>
      )}
    </BoxContainer>
  )
}
