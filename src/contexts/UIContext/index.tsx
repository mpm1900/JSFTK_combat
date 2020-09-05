import React, { useContext, useState } from 'react'

export interface UIContextT {
  openCharacterInventoryId: string | undefined
  setOpenCharacterInventoryId: (id: string | undefined) => void
}

const defaultValue: UIContextT = {
  openCharacterInventoryId: undefined,
  setOpenCharacterInventoryId: (id) => {},
}

export const UIContext = React.createContext<UIContextT>(defaultValue)
export const useUIContext = () => useContext(UIContext)

export interface UIContextProviderPropsT {
  children: JSX.Element
}
export const UIContextProvider = (props: UIContextProviderPropsT) => {
  const { children } = props
  const [openCharacterInventoryId, _setOpenCharacterInventoryId] = useState<
    string | undefined
  >()

  const setOpenCharacterInventoryId = (id: string | undefined) => {
    console.log(id)
    _setOpenCharacterInventoryId(id)
  }
  return (
    <UIContext.Provider
      value={{ openCharacterInventoryId, setOpenCharacterInventoryId }}
    >
      {children}
    </UIContext.Provider>
  )
}
