import React, { useState } from 'react'
import { FlexContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { StatBar } from './StatBar'
import { Items } from './Items'
import { Name } from './Name'
import { Image } from './Image'
import { MenuSelect, ACTIVE_CHARACTER_MENU_KEYS } from './MenuSelect'
import { HoverArea } from './HoverArea'
import { tProcessedCharacter } from '../../game/Character/type'
import { tProcessedParty } from '../../game/Party/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { Theme } from '../../theme'
import { tConsumable } from '../../game/Consumable/type'
import { HexBadge } from '../../elements/shapes'

export interface PartyActiveCharacterPropsT {
  character: tProcessedCharacter
  party: tProcessedParty
  canEquip: boolean
  onRequestClose: () => void
}

export interface ItemStackT<T> {
  count: number
  item: T
}

type ItemT = tConsumable | tArmor | tWeapon
export const condenseListToStack = (items: ItemT[]): ItemStackT<ItemT>[] => {
  let stack: ItemStackT<ItemT>[] = []
  items.forEach((i) => {
    if (stack.map((s) => s.item.name).includes(i.name)) {
      stack = stack.map((s) =>
        s.item.name === i.name ? { ...s, count: s.count + 1 } : s,
      )
    } else {
      stack = [...stack, { item: i, count: 1 }]
    }
  })
  return stack
}

export const PartyActiveCharacter = (props: PartyActiveCharacterPropsT) => {
  const { character, party, canEquip, onRequestClose } = props
  const [activeMenuKey, setActiveMenuKey] = useState('all')
  const [activeItem, setActiveItem] = useState<tArmor | tWeapon | undefined>()
  const activeOption = ACTIVE_CHARACTER_MENU_KEYS.find(
    (o) => o.key === activeMenuKey,
  )

  return (
    <FlexContainer
      style={{
        justifyContent: 'flex-end',
      }}
    >
      <HexBadge
        color={Theme.healthRedColor}
        size={32}
        onClick={onRequestClose}
        style={{
          position: 'absolute',
          top: -14,
          right: -9,
          cursor: 'pointer',
          userSelect: 'none',
          textShadow: '1px 1px 3px black',
        }}
        childStyle={{
          paddingTop: 1,
        }}
      >
        X
      </HexBadge>
      <FlexContainer
        style={{
          maxHeight: 502,
          padding: 10,
          position: 'absolute',
          left: '-6px',
          width: 486,
          justifyContent: 'flex-end',
          zIndex: 1,
        }}
      >
        {activeItem && (
          <HoverArea character={character} activeItem={activeItem} />
        )}
      </FlexContainer>
      <FlexContainer
        $direction='column'
        style={{ background: Theme.darkBgColor, border: '2px solid black' }}
      >
        <FlexContainer $direction='column'>
          <Name name={character.name} />
          <StatBar character={character} />
          <BoxContainer
            substyle={{
              background: Theme.darkBgColor,
              padding: '16px 0 0px 0',
            }}
          >
            <FlexContainer>
              <Items character={character} setActiveItem={setActiveItem} />
              <Image character={character} />
            </FlexContainer>
            <MenuSelect
              character={character}
              party={party}
              activeKey={activeMenuKey}
              onActiveKeyChange={setActiveMenuKey}
            />
          </BoxContainer>
          <BoxContainer
            substyle={{
              background: Theme.darkBgColor,
              padding: '4px 0',
              height: 200,
              overflow: 'auto',
            }}
          >
            {activeOption &&
              activeOption.render(character, canEquip, setActiveItem)}
          </BoxContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
