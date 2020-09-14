import React, { useMemo } from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { FlexContainer } from '../../elements/flex'
import { getEncounterBg } from '../../game/Encounter/constants'

export interface AppBgPropsT {
  children: JSX.Element | JSX.Element[]
}
export const AppBg = (props: AppBgPropsT) => {
  const { children } = props
  const { floor, level } = useGameStateContext()
  const bg = useMemo(() => {
    return getEncounterBg(level, floor)
  }, [floor, level])

  return (
    <FlexContainer
      $full
      $direction='column'
      style={{
        height: '100%',
        overflow: 'hidden',
        background: `url(${bg.bg}) center center fixed no-repeat`,
        backgroundSize: 'cover',
        transition: 'all 2s',
      }}
    >
      <FlexContainer
        $full
        $direction='column'
        style={{ background: bg.overlay, transition: 'all 2s' }}
      >
        {children}
      </FlexContainer>
    </FlexContainer>
  )
}
