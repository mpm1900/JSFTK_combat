import React, { useState } from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { ConfirmButton2, ConfirmButton, RedButton } from '../../elements/button'
import { EnemyCharacter } from '../EnemyCharacter'
import { tProcessedParty } from '../../game/Party/type'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'

export interface CombatPartyPropsT {
  party: tProcessedParty
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
              c.health > 0 &&
              activeCharacter.partyId === PLAYER_PARTY_ID && (
                <FlexContainer
                  style={{ justifyContent: 'center', marginTop: -11 }}
                >
                  <div
                    style={{ boxShadow: '0px 2px 5px black', marginTop: -2 }}
                  >
                    <RedButton onClick={() => next(c)} $direction='down'>
                      Attack
                    </RedButton>
                  </div>
                </FlexContainer>
              )}
          </div>
        ))}
      </FlexContainer>
      {selectedSkill && selectedSkill.targetType === 'group' && (
        <FlexContainer style={{ justifyContent: 'center' }}>
          <div style={{ boxShadow: '0px 2px 5px black' }}>
            <RedButton onClick={() => next(party)}>Attack Group</RedButton>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
