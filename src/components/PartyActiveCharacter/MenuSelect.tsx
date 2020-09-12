import React from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Button } from '../../elements/button'
import Items from '../../icons/svg/delapouite/light-backpack.svg'
import Weapons from '../../icons/svg/lorc/broadsword.svg'
import Armor from '../../icons/svg/delapouite/leather-armor.svg'
import { Icon } from '../Icon'
import { ArmorList } from './ArmorList'
import { WeaponList } from './WeaponList'
import { tProcessedCharacter } from '../../game/Character/type'
import { tProcessedParty } from '../../game/Party/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { Theme } from '../../theme'

export interface MenuOptionT {
  key: string
  icon: string
  count: (character: tProcessedCharacter, party: tProcessedParty) => number
  render: (
    character: tProcessedCharacter,
    canEquip: boolean,
    setActiveItem: (item: tWeapon | tArmor) => void,
  ) => JSX.Element
}
export const ACTIVE_CHARACTER_MENU_KEYS: MenuOptionT[] = [
  /*{
    key: 'items',
    icon: Items,
    count: (c) => c.consumables.length,
    render: (character) => <div>items</div>,
  }, */
  {
    key: 'weapons',
    icon: Weapons,
    count: (c, p) => p.items.filter((i) => i.itemType === 'weapon').length,
    render: (character, canEquip, setActiveItem) => (
      <WeaponList
        character={character}
        canEquip={canEquip}
        setActiveItem={setActiveItem}
      />
    ),
  },
  {
    key: 'armor',
    icon: Armor,
    count: (c, p) => p.items.filter((i) => i.itemType === 'armor').length,
    render: (character, canEquip, setActiveItem) => (
      <ArmorList
        character={character}
        canEquip={canEquip}
        setActiveItem={setActiveItem}
      />
    ),
  },
]

export interface MenuSelectPropsT {
  character: tProcessedCharacter
  party: tProcessedParty
  activeKey: string
  onActiveKeyChange: (key: string) => void
}

export const MenuSelect = (props: MenuSelectPropsT) => {
  const { character, party, activeKey, onActiveKeyChange } = props

  return (
    <FlexContainer style={{ justifyContent: 'center', marginTop: 8 }}>
      {ACTIVE_CHARACTER_MENU_KEYS.map((option) => (
        <Button
          style={{
            padding: '4px 8px',
            //width: 56,
            fontSize: 12,
            display: 'flex',
            justifyContent: 'center',
            background:
              option.key === activeKey ? Theme.lightBgColor : undefined,
          }}
          onClick={() => {
            onActiveKeyChange(option.key)
          }}
        >
          <FullContainer
            style={{ marginRight: 8, textTransform: 'capitalize' }}
          >
            {option.key}
          </FullContainer>
          {/*
          <FullContainer style={{ marginRight: 4 }}>
            <Icon src={option.icon} size={14} />
          </FullContainer> */}
          <FullContainer style={{ paddingRight: 2 }}>
            {option.count(character, party)}
          </FullContainer>
        </Button>
      ))}
    </FlexContainer>
  )
}
