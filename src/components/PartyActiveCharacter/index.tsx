import React, { useState, useRef } from 'react'
import {
  ProcessedCharacterT,
  ProcessedPartyT,
  WeaponT,
  ArmorT,
} from '../../types'
import { FlexContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { StatBar } from './StatBar'
import { Items } from './Items'
import { Name } from './Name'
import { Image } from './Image'
import { MenuSelect, ACTIVE_CHARACTER_MENU_KEYS } from './MenuSelect'
import { HoverArea } from './HoverArea'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { Badge } from '../../elements/badge'

export interface PartyActiveCharacterPropsT {
  character: ProcessedCharacterT
  party: ProcessedPartyT
  equipItem: (characterId: string, item: WeaponT | ArmorT) => void
  canEquip: boolean
  onRequestClose: () => void
}

export const PartyActiveCharacter = (props: PartyActiveCharacterPropsT) => {
  const { character, party, canEquip, equipItem, onRequestClose } = props
  const [activeMenuKey, setActiveMenuKey] = useState('weapons')
  const [activeItem, setActiveItem] = useState<ArmorT | WeaponT | undefined>()
  const activeOption = ACTIVE_CHARACTER_MENU_KEYS.find(
    (o) => o.key === activeMenuKey,
  )
  return (
    <FlexContainer>
      <Badge
        onClick={onRequestClose}
        $top={-10}
        $right={0}
        style={{ cursor: 'pointer' }}
      >
        X
      </Badge>
      <FlexContainer
        style={{
          maxHeight: 440,
          padding: 10,
          position: 'absolute',
          left: '-500px',
          width: 486,
          justifyContent: 'flex-end',
        }}
      >
        {activeItem && (
          <HoverArea character={character} activeItem={activeItem} />
        )}
      </FlexContainer>
      <BoxContainer substyle={{ background: '#111', padding: 0 }}>
        <FlexContainer $direction='column'>
          <Name name={character.name} />
          <StatBar character={character} />
          <BoxContainer
            substyle={{ background: '#111', padding: '16px 0 2px 0' }}
          >
            <FlexContainer>
              <Items character={character} />
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
              background: '#111',
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
