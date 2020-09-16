import React, { useContext, useState } from 'react'
import { tProcessedCharacter } from '../../game/Character/type'
import { tConsumable } from '../../game/Consumable/type'

export interface UIContextT {
  playerCanEquipItem: boolean
  openCharacterInventoryId: string | undefined
  showSkillTooltips: boolean
  hoverQueueCharacterId: string | undefined
  onCharacterConsumableClick: (
    c: tProcessedCharacter,
    index: number,
    item: tConsumable,
  ) => void
  setPlayerCanEquipItem: (v: boolean) => void
  setOpenCharacterInventoryId: (id: string | undefined) => void
  setOnCharacterConsumableClick: (
    fn: (c: tProcessedCharacter, index: number, item: tConsumable) => void,
  ) => void
  setShowSkillTooltips: (v: boolean) => void
  setHoverQueueCharacterId: (id: string | undefined) => void
}

const defaultValue: UIContextT = {
  playerCanEquipItem: false,
  openCharacterInventoryId: undefined,
  showSkillTooltips: false,
  hoverQueueCharacterId: undefined,
  onCharacterConsumableClick: (c, i, item) => {},
  setPlayerCanEquipItem: (v) => {},
  setOpenCharacterInventoryId: (id) => {},
  setOnCharacterConsumableClick: (fn) => {},
  setShowSkillTooltips: (v) => {},
  setHoverQueueCharacterId: (id) => {},
}

export const UIContext = React.createContext<UIContextT>(defaultValue)
export const useUIContext = () => useContext(UIContext)

export interface UIContextProviderPropsT {
  children: JSX.Element
}
export const UIContextProvider = (props: UIContextProviderPropsT) => {
  const { children } = props
  const [playerCanEquipItem, setPlayerCanEquipItem] = useState(false)
  const [showSkillTooltips, setShowSkillTooltips] = useState(true)
  const [openCharacterInventoryId, setOpenCharacterInventoryId] = useState<
    string | undefined
  >()
  const [hoverQueueCharacterId, setHoverQueueCharacterId] = useState<
    string | undefined
  >()
  const [onCharacterConsumableClick, _setOnCharacterConsumableClick] = useState<
    (c: tProcessedCharacter, i: number, item: tConsumable) => void
  >((c, i, item) => {})

  const setOnCharacterConsumableClick = (
    fn: (c: tProcessedCharacter, index: number, item: tConsumable) => void,
  ) => {
    _setOnCharacterConsumableClick(() => fn)
  }
  return (
    <UIContext.Provider
      value={{
        playerCanEquipItem,
        openCharacterInventoryId,
        showSkillTooltips,
        hoverQueueCharacterId,
        onCharacterConsumableClick,
        setPlayerCanEquipItem,
        setOpenCharacterInventoryId,
        setOnCharacterConsumableClick,
        setShowSkillTooltips,
        setHoverQueueCharacterId,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
