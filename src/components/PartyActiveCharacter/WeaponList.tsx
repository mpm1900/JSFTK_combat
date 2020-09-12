import React, { useState } from 'react'
import { FlexContainer } from '../../elements/flex'
import { Button } from '../../elements/button'
import { tProcessedCharacter } from '../../game/Character/type'
import { tArmor } from '../../game/Armor/type'
import { tWeapon } from '../../game/Weapon/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { condenseListToStack } from '.'
import { WEAPON_TYPE_ICONS } from '../../icons/maps'
import { Icon } from '../Icon'
import { Row, ActionsRow } from './elements'
import { usePartyContext } from '../../contexts/PartyContext'

export interface WeaponListPropsT {
  character: tProcessedCharacter
  canEquip: boolean
  setActiveItem: (item: tWeapon | tArmor) => void
}

export const WeaponList = (props: WeaponListPropsT) => {
  const { character, canEquip, setActiveItem } = props
  const { party, sellItem, equipItem } = usePartyContext()
  const [activeItemId, setActiveItemId] = useState<string | undefined>()
  return (
    <FlexContainer $direction='column'>
      {condenseListToStack(
        party.items
          .filter((i) => i.itemType === 'weapon')
          .map((i) => i as tArmor)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ).map(({ item, count }) => {
        const weapon = item as tWeapon
        return (
          <FlexContainer $direction='column'>
            <Row
              $active={weapon.id === activeItemId}
              onMouseEnter={() => setActiveItem(weapon)}
              onClick={(e: MouseEvent) => {
                e.stopPropagation()
                e.preventDefault()
                setActiveItemId(weapon.id)
              }}
            >
              <div style={{ width: 24 }}>
                <Icon
                  src={WEAPON_TYPE_ICONS[weapon.type || 'fist']}
                  size={16}
                  fill={ITEM_RARITY_COLORS[weapon.rarity]}
                  style={{ marginRight: 6 }}
                />
              </div>
              <span style={{ color: ITEM_RARITY_COLORS[weapon.rarity] }}>
                {count} {weapon.name}
              </span>
            </Row>
            {canEquip && activeItemId === weapon.id && (
              <ActionsRow>
                <Button
                  style={{ padding: '4px 8px', marginRight: 10 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    equipItem(character.id, weapon)
                    setActiveItemId(undefined)
                  }}
                >
                  Equip
                </Button>
                <Button
                  style={{ padding: '4px 8px', marginRight: 10 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    sellItem(item.id)
                    setActiveItemId(undefined)
                  }}
                >
                  Sell Item ({item.goldValue})
                </Button>
                <Button
                  style={{ padding: '4px 8px' }}
                  onClick={() => {
                    setActiveItemId(undefined)
                  }}
                >
                  Cancel
                </Button>
              </ActionsRow>
            )}
          </FlexContainer>
        )
      })}
    </FlexContainer>
  )
}
