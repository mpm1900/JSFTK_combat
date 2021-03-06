import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'
import { useCombatContext } from '../../contexts/CombatContext'
import { RedButton } from '../../elements/button'
import { tProcessedCharacter } from '../../game/Character/type'
import { LocalToastRp } from '../../contexts/LocalToastContext'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { usePartyContext } from '../../contexts/PartyContext'
import { useUIContext } from '../../contexts/UIContext'

export interface PlayerPartyPropsT {
  onCharacterClick?: (character: tProcessedCharacter) => void
}
export const PlayerParty = (props: PlayerPartyPropsT) => {
  const { onCharacterClick } = props
  const {
    activeCharacter,
    selectedSkill,
    isRunning,
    next,
    onSkillSelect,
  } = useCombatContext()
  const { currentEncounter } = useGameStateContext()
  const { party } = usePartyContext()
  const { onCharacterConsumableClick } = useUIContext()

  const showConfirmButton = (c: tProcessedCharacter) =>
    selectedSkill &&
    activeCharacter &&
    c.health > 0 &&
    ((selectedSkill.targetType === 'self' && c.id === activeCharacter.id) ||
      selectedSkill.targetType === 'ally')

  return (
    <FlexContainer $direction='column' style={{ marginBottom: 30 }}>
      <FlexContainer
        style={{
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          cursor: selectedSkill?.targetType === 'party' ? 'pointer' : 'default',
        }}
      >
        {party.characters.map((c) => (
          <FlexContainer
            $direction='column'
            key={c.id}
            style={{ height: 177, justifyContent: 'flex-end' }}
          >
            {showConfirmButton(c) && (
              <FlexContainer style={{ justifyContent: 'center' }}>
                <div style={{ boxShadow: '0px 2px 5px black' }}>
                  <RedButton onClick={() => next(c)} $direction='up'>
                    {c.id === activeCharacter.id
                      ? 'Target Self'
                      : 'Target Ally'}
                  </RedButton>
                </div>
              </FlexContainer>
            )}
            <LocalToastRp>
              {({ push }) => (
                <PartyCharacter
                  push={push}
                  selected={
                    isRunning &&
                    currentEncounter &&
                    currentEncounter.type !== 'shop' &&
                    activeCharacter &&
                    c &&
                    c.id === activeCharacter.id
                  }
                  character={c}
                  onClick={() => onCharacterClick && onCharacterClick(c)}
                  onConsumableClick={(consumable, index) => {
                    try {
                      if (!c || !consumable || index === undefined) return
                      if (onCharacterConsumableClick) {
                        onCharacterConsumableClick(c, index, consumable)
                      }
                      if (c && c.id === activeCharacter.id) {
                        onSkillSelect(consumable.skill, index)
                      }
                    } catch (e) {}
                  }}
                />
              )}
            </LocalToastRp>
          </FlexContainer>
        ))}
      </FlexContainer>
      {selectedSkill && selectedSkill.targetType === 'party' && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 2px 5px black' }}>
            <RedButton onClick={() => next(party)}>Target Party</RedButton>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
