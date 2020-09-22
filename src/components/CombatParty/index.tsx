import React from 'react'
import { FlexContainer } from '../../elements/flex'
import { useCombatContext } from '../../contexts/CombatContext'
import { RedButton } from '../../elements/button'
import { EnemyCharacter } from '../EnemyCharacter'
import { tProcessedParty } from '../../game/Party/type'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { useUIContext } from '../../contexts/UIContext'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { HoverToolTip } from '../Tooltip'
import { BoxContainer } from '../../elements/box'
import { DamagePreview } from '../DamagePreview'

export interface CombatPartyPropsT {
  party: tProcessedParty
}
export const CombatParty = (props: CombatPartyPropsT) => {
  const { party } = props
  const { activeCharacter, selectedSkill, next } = useCombatContext()
  const { currentEncounter } = useGameStateContext()
  const { setShowSkillTooltips, hoverQueueCharacterId } = useUIContext()
  return (
    <FlexContainer $direction='column'>
      <FlexContainer
        style={{
          justifyContent: 'space-around',
          padding: '0 120px',
          height: 112,
          cursor: selectedSkill?.targetType === 'group' ? 'pointer' : 'default',
        }}
      >
        {party.characters.map((c) => (
          <div key={c.id}>
            <EnemyCharacter
              activeCharacter={activeCharacter}
              character={c}
              isBoss={currentEncounter?.type === 'boss'}
              isHovering={hoverQueueCharacterId === c.id}
            />

            <div style={{ height: 48 }}>
              {selectedSkill &&
                selectedSkill.targetType === 'single' &&
                c.health > 0 &&
                activeCharacter.partyId === PLAYER_PARTY_ID && (
                  <FlexContainer
                    $center
                    style={{
                      marginTop: -11,
                    }}
                  >
                    <div
                      style={{
                        boxShadow: '0px 2px 5px black',
                        marginTop: -2,
                        height: 36,
                      }}
                    >
                      <HoverToolTip
                        direction='down'
                        content={
                          <DamagePreview
                            skill={selectedSkill}
                            source={activeCharacter}
                            target={c}
                          />
                        }
                      >
                        <RedButton
                          onClick={() => {
                            next(c)
                            setShowSkillTooltips(false)
                          }}
                          $direction='down'
                        >
                          Attack
                        </RedButton>
                      </HoverToolTip>
                    </div>
                  </FlexContainer>
                )}
            </div>
          </div>
        ))}
      </FlexContainer>
      {selectedSkill && selectedSkill.targetType === 'group' && (
        <FlexContainer $center style={{ marginTop: -48 }}>
          <div style={{ boxShadow: '0px 2px 5px black' }}>
            <RedButton
              onClick={() => {
                next(party)
                setShowSkillTooltips(false)
              }}
            >
              Attack Group
            </RedButton>
          </div>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
