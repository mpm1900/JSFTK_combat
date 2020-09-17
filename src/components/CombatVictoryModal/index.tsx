import React, { useMemo, useEffect, useState } from 'react'
import { FlexContainer, FullContainer } from '../../elements/flex'
import { Button } from '../../elements/button'
import { usePartyContext } from '../../contexts/PartyContext'
import { useModalContext } from '../../contexts/ModalContext'
import Gold from '../../icons/svg/delapouite/coins.svg'
import XP from '../../icons/svg/lorc/laurel-crown.svg'
import { Icon } from '../Icon'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { consolidateRewards } from '../../game/Other/util'
import { commitRewards } from '../../game/Party/util'
import { tEncounterReward } from '../../game/Encounter/type'
import { tArmor } from '../../game/Armor/type'
import { tWeapon } from '../../game/Weapon/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { HoverToolTip } from '../Tooltip'
import { ItemCard } from '../ItemCard'
import { Theme } from '../../theme'

const getItem = (
  character: tProcessedCharacter,
  item: tWeapon | tArmor,
): tWeapon | tArmor | undefined => {
  if (item.itemType === 'weapon') {
    return character.weapon
  } else {
    const armor = item as tArmor
    return character.armor.find((a) => a.resource === armor.resource)
  }
}

export interface CombatVictoryModalPropsT {
  rewards: tEncounterReward[]
}

export const CombatVictoryModal = (props: CombatVictoryModalPropsT) => {
  const { rewards } = props
  const { rawParty, party, updateParty, equipItem } = usePartyContext()
  const { nextLevel } = useGameStateContext()
  const { close } = useModalContext()
  const consolidatedRewards = useMemo(() => consolidateRewards(rewards), [
    rewards,
  ])

  const [items, setItems] = useState(consolidatedRewards.items)
  const first = items[0]
  const next = () => {
    if (
      (items.length === 1 && consolidatedRewards.items.length > 0) ||
      consolidatedRewards.items.length === 0
    ) {
      close()
      nextLevel()
    } else {
      setItems((i) => {
        const [first, ...rest] = i
        return rest
      })
    }
  }
  const equip = (characterId: string) => {
    if (first) {
      equipItem(characterId, first as tArmor | tWeapon)
      next()
    }
  }

  useEffect(() => {
    updateParty(commitRewards(rawParty, consolidatedRewards))
  }, [])

  return (
    <FlexContainer
      $direction='column'
      style={{ textAlign: 'center', minHeight: 420 }}
    >
      <h1 style={{ fontFamily: Theme.titleFont, textAlign: 'center' }}>
        You Win!
      </h1>
      <FlexContainer $direction='column' style={{ color: 'white' }}>
        <FlexContainer style={{ marginBottom: 16 }}>
          <FlexContainer>
            <Icon src={Gold} size={18} style={{ marginRight: 8 }} />
            <span>{consolidatedRewards.gold} Gold</span>
          </FlexContainer>
          <FullContainer />
          <FlexContainer>
            <Icon src={XP} size={18} style={{ marginRight: 8 }} />
            <span>{consolidatedRewards.xp} XP</span>
          </FlexContainer>
        </FlexContainer>
        {first && (
          <FlexContainer $direction='column'>
            <FlexContainer style={{ marginBottom: 16 }}>
              <FullContainer />
              <FlexContainer $direction='column'>
                <ItemCard item={first} />
                <span
                  style={{
                    marginTop: 8,
                    color: 'rgba(255,255,255,0.3)',
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}
                >
                  1 of {items.length}
                </span>
              </FlexContainer>
              <FullContainer />
            </FlexContainer>
            {(first.itemType === 'armor' || first.itemType === 'weapon') && (
              <FlexContainer
                style={{ marginBottom: 8, justifyContent: 'center' }}
              >
                {party.characters.map((character) => (
                  <HoverToolTip
                    key={character.id}
                    direction='down'
                    content={
                      <>
                        {getItem(character, first as tWeapon | tArmor) && (
                          <ItemCard
                            item={
                              getItem(character, first as tWeapon | tArmor) as
                                | tWeapon
                                | tArmor
                            }
                          />
                        )}
                      </>
                    }
                  >
                    <Button
                      style={{ padding: 8 }}
                      onClick={() => equip(character.id)}
                    >
                      Equip to {character.name}
                    </Button>
                  </HoverToolTip>
                ))}
              </FlexContainer>
            )}
          </FlexContainer>
        )}
      </FlexContainer>
      <FullContainer />
      <Button
        onClick={() => {
          next()
        }}
      >
        {items.length === 0 ? 'Close' : 'Next'}
      </Button>
    </FlexContainer>
  )
}
