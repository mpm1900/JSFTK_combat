import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'
import { useCombatContext } from '../../contexts/CombatContext'
import { ConfirmButton } from '../../elements/button'
import { ConsumableT } from '../../types/Consumable'
import { tProcessedParty } from '../../game/Party/type'
import { tProcessedCharacter } from '../../game/Character/type'

export interface PlayerPartyPropsT {
  party: tProcessedParty
  onCharacterClick?: (character: tProcessedCharacter) => void
  onConsumableClick?: (
    character: tProcessedCharacter,
    consumableIndex: number,
    consumable: ConsumableT,
  ) => void
}
export const PlayerParty = (props: PlayerPartyPropsT) => {
  const { party, onCharacterClick, onConsumableClick } = props
  const {
    activeCharacter,
    selectedSkill,
    onSkillSelect,
    next,
  } = useCombatContext()

  const showConfirmButton = (c: tProcessedCharacter) =>
    selectedSkill &&
    activeCharacter &&
    c.health > 0 &&
    ((selectedSkill.targetType === 'self' && c.id === activeCharacter.id) ||
      selectedSkill.targetType === 'ally')

  return (
    <FlexContainer $direction='column'>
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
                  <ConfirmButton onClick={() => next(c)} $direction='up'>
                    Confirm Target
                  </ConfirmButton>
                </div>
              </FlexContainer>
            )}
            <PartyCharacter
              selected={activeCharacter && c && c.id === activeCharacter.id}
              character={c}
              onClick={() => onCharacterClick && onCharacterClick(c)}
              onConsumableClick={(consumable, index) => {
                /* TODO
                try {
                  if (!c || !consumable || index === undefined) return
                  if (onConsumableClick) {
                    onConsumableClick(c, index, consumable)
                  }
                  if (c && c.id === activeCharacter.id) {
                    onSkillSelect(consumable.skill, index)
                  }
                } catch (e) {}
                */
              }}
            />
          </FlexContainer>
        ))}
      </FlexContainer>
      {selectedSkill && selectedSkill.targetType === 'party' && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 2px 5px black' }}>
            <ConfirmButton onClick={() => next(party)}>
              Confirm Group Target
            </ConfirmButton>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
