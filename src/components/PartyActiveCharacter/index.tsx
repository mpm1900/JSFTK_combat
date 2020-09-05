import React, { useState } from 'react'
import {
  ProcessedCharacterT,
  ProcessedWeaponT,
  ProcessedPartyT,
  WeaponT,
  ArmorT,
} from '../../types'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { BoxContainer } from '../../elements/box'
import { StatBar } from './StatBar'
import { Items } from './Items'
import { Name } from './Name'
import { Image } from './Image'
import { MenuSelect, ACTIVE_CHARACTER_MENU_KEYS } from './MenuSelect'

export interface PartyActiveCharacterPropsT {
  character: ProcessedCharacterT
  party: ProcessedPartyT
  equipItem: (characterId: string, item: WeaponT | ArmorT) => void
}

export const PartyActiveCharacter = (props: PartyActiveCharacterPropsT) => {
  const { character, party, equipItem } = props
  const [activeMenuKey, setActiveMenuKey] = useState('weapons')
  const activeOption = ACTIVE_CHARACTER_MENU_KEYS.find(
    (o) => o.key === activeMenuKey,
  )
  return (
    <FlexContainer $full>
      <FullContainer />
      <FlexContainer $direction='column'>
        <FullContainer />
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
              {activeOption && activeOption.render(character, party, equipItem)}
            </BoxContainer>
          </FlexContainer>
        </BoxContainer>
        <FullContainer />
      </FlexContainer>
      <FullContainer />
    </FlexContainer>
  )
}
