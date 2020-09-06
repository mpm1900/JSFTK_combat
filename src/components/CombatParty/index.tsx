import React, { useState } from 'react'
import { ProcessedPartyT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { ConfirmButton2, ConfirmButton } from '../../elements/button'
import { EnemyCharacter } from '../EnemyCharacter'
import { PLAYER_PARTY_ID } from '../../objects/Party'

export interface CombatPartyPropsT {
  party: ProcessedPartyT
}
export const CombatParty = (props: CombatPartyPropsT) => {
  const { party } = props
  const {
    activeCharacter,
    selectedSkill,
    onTargetsSelect,
    next,
  } = useCombatContext()
  return (
    <FlexContainer $direction='column'>
      <FlexContainer
        style={{
          justifyContent: 'space-around',
          padding: '0 120px',
          cursor: selectedSkill?.targetType === 'group' ? 'pointer' : 'default',
        }}
        onClick={() => {
          if (selectedSkill && selectedSkill.targetType === 'group') {
            onTargetsSelect(party)
          }
        }}
      >
        {party.characters.map((c) => (
          <div key={c.id}>
            <EnemyCharacter activeCharacter={activeCharacter} character={c} />
            {selectedSkill &&
              selectedSkill.targetType === 'single' &&
              !c.dead &&
              activeCharacter.partyId === PLAYER_PARTY_ID && (
                <FlexContainer
                  style={{ justifyContent: 'center', marginTop: -5 }}
                >
                  <div style={{ boxShadow: '0px 2px 5px black' }}>
                    <ConfirmButton onClick={() => next(c)} $direction='down'>
                      Attack
                    </ConfirmButton>
                  </div>
                </FlexContainer>
              )}
          </div>
        ))}
      </FlexContainer>
      {selectedSkill && selectedSkill.targetType === 'group' && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 2px 5px black' }}>
            <ConfirmButton onClick={() => next(party)}>
              Attack Group
            </ConfirmButton>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
