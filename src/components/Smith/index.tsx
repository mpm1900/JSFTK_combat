import React, { useState } from 'react'
import { usePartyContext } from '../../contexts/PartyContext'
import { BoxContainer } from '../../elements/box'
import { FlexContainer } from '../../elements/flex'
import { getUpgradeOptions } from '../../game/Armor/builders/static'
import { tProcessedCharacter } from '../../game/Character/type'
import { Theme } from '../../theme'
import { ItemCard } from '../ItemCard'
import { CharacterSelector } from './CharacterSelector'
import { UpgradeOptions } from './UpgradeOptions'

export interface SmithPropsT {}

export const Smith = (props: SmithPropsT) => {
  const { party, upgradeItem } = usePartyContext()
  const [activeCharacterId, setActiveCharacterId] = useState(
    party.characters[0].id,
  )
  const activeCharacter = party.characters.find(
    (c) => c.id === activeCharacterId,
  ) as tProcessedCharacter
  return (
    <BoxContainer
      style={{ margin: '24px 24px 0 0', borderWidth: 2 }}
      substyle={{ boxShadow: '0px 0px 10px black', padding: 0 }}
    >
      <FlexContainer
        style={{
          background: Theme.otherGrey2,
          height: 32,
          fontSize: 18,
          fontFamily: Theme.titleFont,
          alignItems: 'center',
          paddingLeft: 8,
          marginTop: -1,
          marginRight: -1,
          marginLeft: -1,
          boxShadow: '0px 4px 5px black',
          textShadow: '1px 1px 3px black',
        }}
      >
        Armor Workshop (Upgrades)
      </FlexContainer>
      <FlexContainer $direction='column'>
        <FlexContainer style={{ justifyContent: 'space-around' }}>
          {party.characters.map((c) => (
            <CharacterSelector
              character={c}
              active={activeCharacter.id === c.id}
              onClick={() => setActiveCharacterId(c.id)}
            />
          ))}
        </FlexContainer>
        <FlexContainer
          style={{
            justifyContent: 'center',
            maxHeight: 'calc(100vh - 444px)',
            padding: 16,
            boxShadow: 'inset 0px 0px 20px black',
            overflow: 'auto',
            background: Theme.mediumBgColor,
          }}
        >
          <UpgradeOptions
            character={activeCharacter}
            resource='head'
            upgradeItem={upgradeItem}
          />
          <UpgradeOptions
            character={activeCharacter}
            resource='body'
            upgradeItem={upgradeItem}
          />
          <UpgradeOptions
            character={activeCharacter}
            resource='feet'
            upgradeItem={upgradeItem}
          />
        </FlexContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
