import React, { useState } from 'react'
import { ProcessedPartyT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { ConfirmButton } from '../../elements/button'
import { EnemyCharacter } from '../EnemyCharacter'

export interface CombatPartyPropsT {
  party: ProcessedPartyT
}
export const CombatParty = (props: CombatPartyPropsT) => {
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
          cursor: selectedSkill?.targetType === 'group' ? 'pointer' : 'default',
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => {
          if (selectedSkill && selectedSkill.targetType === 'group') {
            onTargetsSelect(party)
          }
        }}
      >
        {party.characters.map((c) => (
          <div>
            <EnemyCharacter
              hoverable={
                selectedSkill !== undefined &&
                selectedSkill.targetType === 'single'
              }
              isHovering={isHovering && selectedSkill?.targetType === 'group'}
              selected={
                selectedTargets.find((t) => t.id === c.id) !== undefined
              }
              onClick={() => {
                if (selectedSkill && selectedSkill.targetType === 'single') {
                  onTargetsSelect(c)
                }
              }}
              activeCharacter={activeCharacter}
              character={c}
            />
            {selectedSkill &&
              selectedSkill.targetType === 'single' &&
              selectedTargets.length > 0 &&
              selectedTargets[0].id === c.id && (
                <FlexContainer
                  style={{ justifyContent: 'center', marginTop: -13 }}
                >
                  <div style={{ boxShadow: '0px 2px 5px black' }}>
                    <ConfirmButton onClick={() => next()} $direction='down'>
                      Confirm Target
                    </ConfirmButton>
                  </div>
                </FlexContainer>
              )}
          </div>
        ))}
      </FlexContainer>
      {selectedSkill &&
        selectedSkill.targetType === 'group' &&
        selectedTargets.length > 0 && (
          <FlexContainer style={{ justifyContent: 'center' }}>
            <div style={{ boxShadow: '0px 2px 5px black' }}>
              <ConfirmButton
                onClick={() => next()}
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
