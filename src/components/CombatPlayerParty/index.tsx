import React from 'react'
import { ProcessedPartyT, ProcessedCharacterT } from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'
import { useCombatContext } from '../../contexts/CombatContext'
import { ConfirmButton } from '../../elements/button'
import { ConsumableT } from '../../types/Consumable'

export interface CombatPartyPlayerPropsT {
  party: ProcessedPartyT
  onCharacterClick?: (character: ProcessedCharacterT) => void
  onConsumableClick?: (
    character: ProcessedCharacterT,
    consumableIndex: number,
    consumable: ConsumableT,
  ) => void
}
export const CombatPlayerParty = (props: CombatPartyPlayerPropsT) => {
  const { party, onCharacterClick, onConsumableClick } = props
  const {
    activeCharacter,
    selectedSkill,
    onSkillSelect,
    next,
  } = useCombatContext()

  const showConfirmButton = (c: ProcessedCharacterT) =>
    selectedSkill &&
    activeCharacter &&
    !c.dead &&
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
              selected={activeCharacter && c.id === activeCharacter.id}
              character={c}
              onClick={() => onCharacterClick && onCharacterClick(c)}
              onConsumableClick={(consumable, index) => {
                console.log('click', consumable, c)
                if (onConsumableClick) {
                  onConsumableClick(c, index, consumable)
                }
                if (c.id === activeCharacter.id) {
                  onSkillSelect(consumable.skill, index)
                }
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
