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
import { CombatVictoryModalPure } from './pure'
import { tItem } from '../../game/Item/type'

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
