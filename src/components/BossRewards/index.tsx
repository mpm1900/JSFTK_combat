import React, { useEffect, useState } from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { usePartyContext } from '../../contexts/PartyContext'
import { RedButton } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { tArmor } from '../../game/Armor/type'
import { tBossEncounter } from '../../game/Encounter/type'
import { BOSS_ITEMS } from '../../game/Weapon/constants'
import { tWeapon } from '../../game/Weapon/type'
import { Theme } from '../../theme'
import { ItemCard } from '../ItemCard'

export const BossRewards = () => {
  const { currentEncounter } = useGameStateContext()
  const { nextFloor } = useGameStateContext()
  const { updateParty, rawParty } = usePartyContext()
  const [chosenReward, setChosenReward] = useState<
    tArmor | tWeapon | undefined
  >()

  useEffect(() => {
    updateParty({
      ...rawParty,
      characters: rawParty.characters.map((c) => ({
        ...c,
        healthOffset: 0,
      })),
    })
  }, [])

  if (!currentEncounter) return null
  const boss = (currentEncounter as tBossEncounter).party.characters[0]

  return (
    <FlexContainer
      $direction='column'
      style={{
        padding: 16,
        background: Theme.darkBgColor,
        marginRight: 16,
        marginTop: 16,
      }}
    >
      <h1
        style={{
          marginTop: 8,
          fontFamily: Theme.titleFont,
          textAlign: 'center',
          color: 'white',
        }}
      >
        Choose your reward
      </h1>
      <FlexContainer $center>
        {(BOSS_ITEMS[boss.id] || []).map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            showBuyButton={!chosenReward || chosenReward.id !== item.id}
            buyText={'Choose This Item'}
            onBuyClick={() => setChosenReward(item)}
          />
        ))}
      </FlexContainer>
      {chosenReward && (
        <FlexContainer $center style={{ marginTop: 24 }}>
          <RedButton
            onClick={() => {
              updateParty({
                ...rawParty,
                items: [...rawParty.items, chosenReward],
              })
              nextFloor()
            }}
          >
            Next Floor
          </RedButton>
        </FlexContainer>
      )}
    </FlexContainer>
  )
}
