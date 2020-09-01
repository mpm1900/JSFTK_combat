import React, { useState } from 'react'
import { ProcessedPartyT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'
import { useCombatContext } from '../../contexts/CombatContext'
import { BoxButton } from '../../elements/box'
import { Button } from '../../elements/button'

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
            <PartyCharacter
              hoverable={selectedSkill !== undefined}
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
                <FlexContainer style={{ justifyContent: 'center' }}>
                  <div style={{ boxShadow: '0px 2px 5px black' }}>
                    <Button
                      onClick={() => next()}
                      style={{
                        borderTop: 'none',
                        padding: '10px 30px',
                        boxShadow: 'inset 0px 2px 8px black',
                      }}
                    >
                      Confirm
                    </Button>
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
              <Button
                onClick={() => next()}
                style={{
                  borderTop: 'none',
                  padding: '10px 30px',
                  boxShadow: 'inset 0px 2px 8px black',
                }}
              >
                Confirm
              </Button>
            </div>
          </FlexContainer>
        )}
    </FlexContainer>
  )
}
