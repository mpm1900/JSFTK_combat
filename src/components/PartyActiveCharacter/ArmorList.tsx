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
import { Icon } from '../Icon'
import { ARMOR_TYPE_ICONS } from '../../icons/maps'
import { ITEM_RARITY_COLORS } from '../../objects/Item'
import { ClickToolTip } from '../Tooltip'
import { Button } from '../../elements/button'

export interface ArmorListPropsT {
  party: ProcessedPartyT
  character: ProcessedCharacterT
  canEquip: boolean
  equipItem: (characterId: string, item: WeaponT | ArmorT) => void
  setActiveItem: (item: WeaponT | ArmorT) => void
}

const ArmorItem = withStyle(FlexContainer, (props: any) => {
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

export const ArmorList = (props: ArmorListPropsT) => {
  const { party, character, canEquip, equipItem, setActiveItem } = props
  const [activeItemId, setActiveItemId] = useState<string | undefined>()

  return (
    <FlexContainer $direction='column'>
      {party.items
        .filter((i) => i.itemType === 'armor')
        .map((i) => i as ArmorT)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((armor) => (
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
                        equipItem(character.id, armor)
                        setActiveItemId(undefined)
                      }}
                    >
                      Equip
                    </Button>
                    <Button
                      style={{ padding: '4px 8px' }}
                      onClick={() => {
                        setActiveItemId(undefined)
                      }}
                    >
                      Cancel
                    </Button>
                  </BoxContainer>
                )}
              </>
            )}
          >
            {({ onClick, ref }) => (
              <ArmorItem
                $active={armor.id === activeItemId}
                onMouseEnter={() => setActiveItem(armor)}
                ref={ref}
                onClick={(e: MouseEvent) => {
                  e.stopPropagation()
                  e.preventDefault()
                  setActiveItemId(armor.id)
                  onClick()
                }}
              >
                <Icon
                  src={ARMOR_TYPE_ICONS[armor.type]}
                  size={14}
                  style={{ marginRight: 10 }}
                  fill={ITEM_RARITY_COLORS[armor.rarity]}
                  shadow
                />
                <span style={{ color: ITEM_RARITY_COLORS[armor.rarity] }}>
                  {armor.name}
                </span>
              </ArmorItem>
            )}
          </ClickToolTip>
        ))}
    </FlexContainer>
  )
}
