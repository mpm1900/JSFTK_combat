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
import ForestBg from '../assets/img/flat-forestred.jpg'
import { CombatLog } from '../components/CombatLog'

export const Combat = () => {
  const {
    party,
    enemyParty,
    activeCharacter,
    characters,
    queue,
    isDone,
    isRunning,
    isRenderingResult,
    start,
  } = useCombatContext()
  const { open, close } = useModalContext()
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
      }, 1000)
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

  if (!activeCharacter) return <span>refresh to do combat again</span>

  return (
    <FlexContainer
      style={{
        height: '100vh',
        background: `url(${ForestBg}) center center fixed no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <FlexContainer $full $direction='column'>
        <CombatQueue queue={queue} characters={characters} />
        <FlexContainer
          $direction='column'
          $full
          style={{ padding: '30px 10px' }}
        >
          <FlexContainer $direction='column' $full>
            <CombatParty party={enemyParty} />
          </FlexContainer>
          <FlexContainer $full>
            <FullContainer />
            <FlexContainer $direction='column'>
              {!isRenderingResult && <CombatActions />}
              <RoundResultRenderer isModal={false} />
            </FlexContainer>
            <FlexContainer $full style={{ justifyContent: 'flex-end' }}>
              <CombatLog />
            </FlexContainer>
          </FlexContainer>
          <FlexContainer
            $direction='column'
            $full
            style={{ justifyContent: 'flex-end' }}
          >
            <CombatPlayerParty party={party} />
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  )
}
