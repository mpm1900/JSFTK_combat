import React, { useMemo } from 'react'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { FlexContainer } from '../../elements/flex'
import { getEncounterBg } from '../../game/Encounter/constants'
import { getDepth, MIN_HEX } from '../../grid/util'

export interface AppBgPropsT {
  children: JSX.Element | JSX.Element[]
}
export const AppBg = (props: AppBgPropsT) => {
  const { children } = props
  const { currentFloor, currentHex, currentEncounter } = useGameStateContext()

  const baseBg = useMemo(() => {
    return getEncounterBg(
      getDepth(currentHex || MIN_HEX(currentFloor.size), currentFloor.size),
      currentFloor.id,
    )
  }, [currentFloor, currentHex])
  const bg = currentEncounter?.completed ? baseBg.completed || baseBg : baseBg

  /*
  const deadCount = party.characters.filter((c) => c.health <= 0).length
  const deadDiff = party.characters.length - deadCount
  const filter = `grayscale(${
    ((party.characters.length - deadDiff) / party.characters.length) * 100
  }%)`
  */

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
        //filter,
      }}
    >
      <FlexContainer
        $full
        $direction='column'
        style={{
          background: bg.overlay,
          transition: 'all 2s',
        }}
      >
        {children}
      </FlexContainer>
    </FlexContainer>
  )
}
