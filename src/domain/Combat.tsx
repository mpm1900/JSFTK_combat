import React from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { BoxContainer, BoxButton } from '../elements/box'
import { FlexContainer, FullContainer } from '../elements/flex'
import { useCombatLogContext } from '../contexts/CombatLogContext'
import { PartyCharacter } from '../components/PartyCharacter'
import { RoundResultRenderer } from '../components/RoundResultRenderer'
import { CombatActions } from '../components/CombatActions'
import { CombatParty } from '../components/CombatParty'

export const Combat = () => {
  const {
    party,
    enemyParty,
    activeCharacter,
    queue,
    isDone,
  } = useCombatContext()
  const { combatLog } = useCombatLogContext()
  if (!activeCharacter || isDone) return <span>refresh to do combat again</span>
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
