import React, { useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { BoxContainer } from '../elements/box'
import { FlexContainer, FullContainer } from '../elements/flex'
import { useCombatLogContext } from '../contexts/CombatLogContext'
import { CombatPlayerParty } from '../components/CombatPlayerParty'
import { RoundResultRenderer } from '../components/RoundResultRenderer'
import { CombatActions } from '../components/CombatActions'
import { CombatParty } from '../components/CombatParty'
import { useModalContext } from '../contexts/ModalContext'
import { CombatQueue } from '../components/CombatQueue'

export const Combat = () => {
  const {
    party,
    enemyParty,
    activeCharacter,
    characters,
    queue,
    isDone,
    isRunning,
    start,
  } = useCombatContext()
  const { open, close } = useModalContext()
  const { combatLog } = useCombatLogContext()
  useEffect(() => {
    if (!isRunning) {
      open(
        <div style={{ textAlign: 'center' }}>
          <h1>Combat Start!</h1>
        </div>,
      )
      setTimeout(() => {
        close()
        start()
      }, 500)
    }
  }, [])
  useEffect(() => {
    if (isDone) {
      open(
        <div style={{ textAlign: 'center' }}>
          <h4>Refresh to do combat again</h4>
        </div>,
      )
    }
  }, [isDone])
  if (!isRunning) return null
  if (!activeCharacter) return <span>refresh to do combat again</span>

  return (
    <FlexContainer style={{ height: '100vh' }}>
      <FlexContainer $full $direction='column'>
        <CombatQueue queue={queue} characters={characters} />
        <FlexContainer
          $direction='column'
          $full
          style={{ padding: '30px 10px' }}
        >
          <CombatParty party={enemyParty} />
          <FlexContainer $full>
            <FullContainer />
            <FlexContainer $direction='column'>
              <FullContainer />
              <CombatActions />
              <RoundResultRenderer />
              <FullContainer />
            </FlexContainer>
            <FullContainer />
          </FlexContainer>
          <CombatPlayerParty party={party} />
        </FlexContainer>
      </FlexContainer>

      <BoxContainer
        substyle={{
          minWidth: 300,
          fontSize: 12,
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {combatLog.map((line) => line)}
      </BoxContainer>
    </FlexContainer>
  )
}
