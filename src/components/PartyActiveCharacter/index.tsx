import React, { useState } from 'react'
import { FlexContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { StatBar } from './StatBar'
import { Items } from './Items'
import { Name } from './Name'
import { Image } from './Image'
import { MenuSelect, ACTIVE_CHARACTER_MENU_KEYS } from './MenuSelect'
import { HoverArea } from './HoverArea'
import { Badge } from '../../elements/badge'
import { tProcessedCharacter } from '../../game/Character/type'
import { tProcessedParty } from '../../game/Party/type'
import { tWeapon } from '../../game/Weapon/type'
import { tArmor } from '../../game/Armor/type'
import { Theme } from '../../theme'
import { tItem } from '../../game/Item/type'
import { tConsumable } from '../../game/Consumable/type'

export interface PartyActiveCharacterPropsT {
  character: tProcessedCharacter
  party: tProcessedParty
  equipItem: (characterId: string, item: tWeapon | tArmor) => void
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
  const { character, party, canEquip, equipItem, onRequestClose } = props
  const [activeMenuKey, setActiveMenuKey] = useState('armor')
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
      <Badge
        onClick={onRequestClose}
        $top={-10}
        $right={-2}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        X
      </Badge>
      <FlexContainer
        style={{
          maxHeight: 440,
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
      <BoxContainer substyle={{ background: Theme.darkBgColor, padding: 0 }}>
        <FlexContainer $direction='column'>
          <Name name={character.name} />
          <StatBar character={character} />
          <BoxContainer
            substyle={{
              background: Theme.darkBgColor,
              padding: '16px 0 2px 0',
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
              activeOption.render(
                character,
                party,
                canEquip,
                equipItem,
                setActiveItem,
              )}
          </BoxContainer>
        </FlexContainer>
      </BoxContainer>
    </FlexContainer>
  )
}
