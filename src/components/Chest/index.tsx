import React, { useEffect } from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'
import { Theme } from '../../theme'
import { Icon } from '../Icon'
import ChestIcon from '../../icons/svg/lorc/locked-chest.svg'
import { tRewardEncounter } from '../../game/Encounter/type'
import { useModalContext } from '../../contexts/ModalContext'
import { usePartyContext } from '../../contexts/PartyContext'
import { commitRewards } from '../../game/Party/util'
import { CombatVictoryModalPure } from '../CombatVictoryModal/pure'

export const Chest = () => {
  const {
    openCurrent,
    completeCurrent,
    currentEncounter,
  } = useGameStateContext()
  const { open, close } = useModalContext()
  const { rawParty, updateParty, equipItem } = usePartyContext()
  useEffect(() => {
    if (
      (currentEncounter as tRewardEncounter).isOpened &&
      currentEncounter?.reward
    ) {
      updateParty(commitRewards(rawParty, currentEncounter?.reward))
      open(
        <CombatVictoryModalPure
          title='Rewards!'
          rewards={currentEncounter.reward}
          onNextClick={() => {
            completeCurrent()
            close()
          }}
          onEquipClick={equipItem}
        />,
      )
    }
  }, [(currentEncounter as tRewardEncounter | undefined)?.isOpened])
  return (
    <FlexContainer
      $direction='column'
      style={{
        margin: '20px 20px 20px 0',
        padding: 16,
        background: Theme.darkBgColor,
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          marginTop: 0,
          color: 'white',
          fontFamily: Theme.titleFont,
          fontWeight: 'normal',
          textAlign: 'center',
        }}
      >
        You found treasure!
      </h1>
      <Icon size={200} src={ChestIcon} style={{ marginBottom: 24 }} />
      <Button onClick={() => openCurrent()}>Open</Button>
    </FlexContainer>
  )
}
