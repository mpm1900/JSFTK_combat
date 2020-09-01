import React, { useState } from 'react'
import { ProcessedPartyT } from '../../types'
import { FlexContainer } from '../../elements/flex'
import { PartyCharacter } from '../PartyCharacter'
import { useCombatContext } from '../../contexts/CombatContext'

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
  } = useCombatContext()

  const [isHovering, setIsHovering] = useState<boolean>(false)
  return (
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
            selected={selectedTargets.find((t) => t.id === c.id) !== undefined}
            onClick={() => {
              if (selectedSkill && selectedSkill.targetType === 'single') {
                onTargetsSelect(c)
              }
            }}
            activeCharacter={activeCharacter}
            character={c}
          />
        </div>
      ))}
    </FlexContainer>
  )
}
