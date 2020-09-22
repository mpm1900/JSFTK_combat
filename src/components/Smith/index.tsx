import React, { useState } from 'react'
import { usePartyContext } from '../../contexts/PartyContext'
import { BoxContainer } from '../../elements/box'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { tProcessedCharacter } from '../../game/Character/type'
import { Theme } from '../../theme'
import { Icon } from '../Icon'
import { CharacterSelector } from './CharacterSelector'
import { UpgradeOptions } from './UpgradeOptions'
import SmithIcon from '../../icons/svg/lorc/anvil-impact.svg'

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
    <FullContainer>
      <BoxContainer
        style={{ margin: '24px 24px 0 0', borderWidth: 2 }}
        substyle={{
          boxShadow: '0px 0px 10px black',
          padding: 0,
          borderColor: Theme.otherGrey2,
        }}
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
            textShadow: '1px 1px 3px black',
          }}
        >
          <Icon
            src={SmithIcon}
            size={24}
            shadow
            style={{ marginRight: 8, marginTop: -2 }}
          />
          Armor Workshop (Upgrades)
        </FlexContainer>
        <FlexContainer $direction='column'>
          <FlexContainer
            style={{
              justifyContent: 'space-around',
              background: Theme.otherGrey,
              boxShadow: 'inset 0px 3px 5px black',
              padding: '4px 0',
            }}
          >
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
              maxHeight: 'calc(100vh - 467px)',
              padding: 16,
              boxShadow: 'inset 0px 0px 20px black',
              overflow: 'auto',
              background: Theme.mediumBgColor,
            }}
          >
            <UpgradeOptions
              character={activeCharacter}
              resource='head'
              gold={party.gold}
              upgradeItem={upgradeItem}
            />
            <UpgradeOptions
              character={activeCharacter}
              resource='body'
              gold={party.gold}
              upgradeItem={upgradeItem}
            />
            <UpgradeOptions
              character={activeCharacter}
              resource='feet'
              gold={party.gold}
              upgradeItem={upgradeItem}
            />
          </FlexContainer>
        </FlexContainer>
      </BoxContainer>
    </FullContainer>
  )
}
