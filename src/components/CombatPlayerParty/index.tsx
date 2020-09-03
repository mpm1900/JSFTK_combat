import React, { useState } from 'react'
import { ProcessedPartyT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'
import { useCombatContext } from '../../contexts/CombatContext'
import { ConfirmButton } from '../../elements/button'

export interface CombatPartyPlayerPropsT {
  party: ProcessedPartyT
}
export const CombatPlayerParty = (props: CombatPartyPlayerPropsT) => {
  const { party } = props
  const {
    activeCharacter,
    selectedSkill,
    selectedTargets,
    onTargetsSelect,
    next,
  } = useCombatContext()

  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
    <FlexContainer $direction='column'>
      <FlexContainer
        style={{
          justifyContent: 'space-around',
          alignItems: 'flex-end',
          cursor: selectedSkill?.targetType === 'party' ? 'pointer' : 'default',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          if (selectedSkill && selectedSkill.targetType === 'party') {
            onTargetsSelect(party)
          }
        }}
      >
        {party.characters.map((c) => (
          <div key={c.id}>
            {selectedSkill &&
              ((selectedSkill.targetType === 'self' &&
                c.id === activeCharacter.id) ||
                selectedSkill.targetType === 'ally') && (
                <FlexContainer style={{ justifyContent: 'center' }}>
                  <div style={{ boxShadow: '0px 2px 5px black' }}>
                    <ConfirmButton onClick={() => next(c)} $direction='up'>
                      Confirm Target
                    </ConfirmButton>
                  </div>
                </FlexContainer>
              )}
            <PartyCharacter activeCharacter={activeCharacter} character={c} />
          </div>
        ))}
      </FlexContainer>
      {selectedSkill && selectedSkill.targetType === 'party' && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 2px 5px black' }}>
            <ConfirmButton
              onClick={() => next(party)}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              Confirm Group Target
            </ConfirmButton>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
