import React, { useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { BoxContainer, BoxButton } from '../elements/box'
import { FlexContainer, FullContainer } from '../elements/flex'
import { useCombatLogContext } from '../contexts/CombatLogContext'
import { PartyCharacter } from '../components/PartyCharacter'
import { RoundResultRenderer } from '../components/RoundResultRenderer'
import { CombatActions } from '../components/CombatActions'
import { CombatParty } from '../components/CombatParty'
import { useModalContext } from '../contexts/ModalContext'
import { start } from 'repl'

export const Combat = () => {
  const {
    party,
    enemyParty,
    activeCharacter,
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
        <BoxContainer>
          {queue.map((c) => (
            <span>
              {c.name} {`>`}
            </span>
          ))}
        </BoxContainer>
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
          <FlexContainer style={{ justifyContent: 'space-around' }}>
            {party.characters.map((c) => (
              <div>
                <PartyCharacter
                  activeCharacter={activeCharacter}
                  character={c}
                />
              </div>
            ))}
          </FlexContainer>
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
