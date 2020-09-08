import React from 'react'
import Details from '../../icons/svg/delapouite/skills.svg'
import Inventory from '../../icons/svg/lorc/knapsack.svg'
import { FlexContainer } from '../../elements/flex'
import { Tooltip } from '../Tooltip'
import { PartyActiveCharacter } from '../PartyActiveCharacter'
import { usePartyContext } from '../../contexts/PartyContext'
import { useUIContext } from '../../contexts/UIContext'
import { Hover } from '../Hover'
import { Icon } from '../Icon'
import { tProcessedCharacter } from '../../game/Character/type'
import { animated, useSpring } from 'react-spring'

export interface ActionsPropsT {
  character: tProcessedCharacter
  canEquip: boolean
}

export const Actions = (props: ActionsPropsT) => {
  const { character, canEquip } = props
  const { party, equipItem } = usePartyContext()
  const {
    openCharacterInventoryId,
    setOpenCharacterInventoryId,
  } = useUIContext()
  const inventoryOpen = character.id === openCharacterInventoryId
  const inventoryStyle = useSpring({
    opacity: inventoryOpen ? 1 : 0,
    config: { tension: 500 },
  })
  return (
    <FlexContainer
      $full
      $direction='column'
      style={{ justifyContent: 'center' }}
    >
      <FlexContainer
        $full
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Tooltip
          isOpen={inventoryOpen}
          direction='up'
          distance={40}
          background='rgba(0,0,0,0.5)'
          arrow
          content={
            <animated.div
              style={{ minWidth: 887, minHeight: 444, ...inventoryStyle }}
            >
              {inventoryOpen && (
                <PartyActiveCharacter
                  character={character}
                  party={party}
                  equipItem={equipItem}
                  canEquip={canEquip}
                  onRequestClose={() => {
                    setOpenCharacterInventoryId(undefined)
                  }}
                />
              )}
            </animated.div>
          }
        >
          <Hover delay={0}>
            {({ isHovering }) => (
              <Icon
                src={Inventory}
                fill={
                  isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.7)'
                }
                size={18}
                shadow
                onClick={() => {
                  if (character.id === openCharacterInventoryId) {
                    return setOpenCharacterInventoryId(undefined)
                  }
                  setOpenCharacterInventoryId(character.id)
                }}
                style={{ padding: 6, cursor: 'pointer' }}
              />
            )}
          </Hover>
        </Tooltip>
      </FlexContainer>
      <FlexContainer
        $full
        style={{ alignItems: 'center', justifyContent: 'center' }}
      >
        <Icon
          src={Details}
          fill={'rgba(255,255,255,0.7)'}
          size={18}
          shadow
          style={{ padding: 6, cursor: 'pointer' }}
        />
      </FlexContainer>
    </FlexContainer>
  )
}
