import React, { useState } from 'react'
import { FlexContainer } from '../../elements/flex'
import { Icon } from '../Icon'
import { ARMOR_TYPE_ICONS } from '../../icons/maps'
import { Button } from '../../elements/button'
import { tProcessedParty } from '../../game/Party/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { ITEM_RARITY_COLORS } from '../../game/Item/constants'
import { condenseListToStack } from '.'
import { Row, ActionsRow } from './elements'
import { usePartyContext } from '../../contexts/PartyContext'

export interface ArmorListPropsT {
  party: tProcessedParty
  character: tProcessedCharacter
  canEquip: boolean
  equipItem: (characterId: string, item: tWeapon | tArmor) => void
  setActiveItem: (item: tWeapon | tArmor) => void
}

export const ArmorList = (props: ArmorListPropsT) => {
  const { party, character, canEquip, equipItem, setActiveItem } = props
  const { sellItem } = usePartyContext()
  const [activeItemId, setActiveItemId] = useState<string | undefined>()
  return (
    <FlexContainer $direction='column'>
      {condenseListToStack(
        party.items
          .filter((i) => i.itemType === 'armor')
          .map((i) => i as tArmor)
          .sort((a, b) => a.name.localeCompare(b.name)),
      ).map(({ item, count }) => {
        const armor = item as tArmor
        return (
          <FlexContainer $direction='column'>
            <Row
              $active={item.id === activeItemId}
              onMouseEnter={() => setActiveItem(armor)}
              onClick={(e: MouseEvent) => {
                e.stopPropagation()
                e.preventDefault()
                setActiveItemId(armor.id)
              }}
            >
              <div style={{ width: 24 }}>
                <Icon
                  src={ARMOR_TYPE_ICONS[armor.type]}
                  size={16}
                  style={{ marginRight: 10 }}
                  fill={ITEM_RARITY_COLORS[armor.rarity]}
                  shadow
                />
              </div>
              <span style={{ color: ITEM_RARITY_COLORS[armor.rarity] }}>
                {count} {armor.name}
              </span>
            </Row>
            {canEquip && activeItemId === armor.id && (
              <ActionsRow>
                <Button
                  style={{ padding: '4px 8px', marginRight: 10 }}
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    equipItem(character.id, armor)
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
