import React, { useState } from 'react'
import { FlexContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import {
  ProcessedPartyT,
  ArmorT,
  WeaponT,
  ProcessedCharacterT,
} from '../../types'
import { withStyle } from 'styletron-react'
import { ITEM_RARITY_COLORS } from '../../objects/Item'
import { ClickToolTip } from '../Tooltip'
import { Button } from '../../elements/button'

export interface WeaponListPropsT {
  party: ProcessedPartyT
  character: ProcessedCharacterT
  canEquip: boolean
  equipItem: (characterId: string, item: WeaponT | ArmorT) => void
  setActiveItem: (item: WeaponT | ArmorT) => void
}

const WeaponItem = withStyle(FlexContainer, (props: any) => {
  return {
    alignItems: 'center',
    marginBottom: '4px',
    textShadow: '1px 1px 1px black',
    background: props.$active ? 'rgba(255,255,255,0.2)' : undefined,
    paddingLeft: '8px',
    transition: 'all 0.2s',
    userSelect: 'none',
    cursor: 'pointer',
    ':hover': {
      background: 'rgba(255,255,255,0.2)',
    },
  }
})

export const WeaponList = (props: WeaponListPropsT) => {
  const { party, character, canEquip, equipItem, setActiveItem } = props
  const [activeItemId, setActiveItemId] = useState<string | undefined>()

  return (
    <FlexContainer $direction='column'>
      {party.items
        .filter((i) => i.itemType === 'weapon')
        .map((i) => i as ArmorT)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((weapon) => (
          <ClickToolTip
            direction='down'
            distance={-2}
            content={() => (
              <>
                {canEquip && (
                  <BoxContainer
                    substyle={{
                      padding: 4,
                      width: 346,
                      display: 'flex',
                      justifyContent: 'center',
                      background: '#333',
                    }}
                  >
                    <Button
                      style={{ padding: '4px 8px' }}
                      onClick={() => {
                        equipItem(character.id, weapon)
                        setActiveItemId(undefined)
                      }}
                    >
                      Equip
                    </Button>
                  </BoxContainer>
                )}
              </>
            )}
          >
            {({ onClick, ref }) => (
              <WeaponItem
                $active={weapon.id === activeItemId}
                onMouseEnter={() => setActiveItem(weapon)}
                ref={ref}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setActiveItemId(weapon.id)
                  onClick()
                }}
              >
                <span style={{ color: ITEM_RARITY_COLORS[weapon.rarity] }}>
                  {weapon.name}
                </span>
              </WeaponItem>
            )}
          </ClickToolTip>
        ))}
    </FlexContainer>
  )
}
