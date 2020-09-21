import React, { useMemo, useEffect } from 'react'
import { usePartyContext } from '../../contexts/PartyContext'
import { useModalContext } from '../../contexts/ModalContext'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { consolidateRewards } from '../../game/Other/util'
import { commitRewards } from '../../game/Party/util'
import { tEncounterReward } from '../../game/Encounter/type'
import { tArmor } from '../../game/Armor/type'
import { tWeapon } from '../../game/Weapon/type'
import { CombatVictoryModalPure } from './pure'

export interface CombatVictoryModalPropsT {
  rewards: tEncounterReward[]
}

export const CombatVictoryModal = (props: CombatVictoryModalPropsT) => {
  const { rewards } = props
  const { rawParty, party, updateParty, equipItem } = usePartyContext()
  const { completeCurrent } = useGameStateContext()
  const { close } = useModalContext()
  const consolidatedRewards = useMemo(() => consolidateRewards(rewards), [
    rewards,
  ])

  const next = () => {
    close()
    completeCurrent()
  }
  const equip = (characterId: string, item: tArmor | tWeapon) => {
    equipItem(characterId, item)
  }

  useEffect(() => {
    updateParty(commitRewards(rawParty, consolidatedRewards))
  }, [])

  return (
    <CombatVictoryModalPure
      rewards={consolidatedRewards}
      title='You Win!'
      onEquipClick={equip}
      onNextClick={next}
    />
  )
}
