import React from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { BoxContainer, BoxButton } from '../elements/box'
import { FlexContainer, FullContainer } from '../elements/flex'
import { useCombatLogContext } from '../contexts/CombatLogContext'
import { PartyCharacter } from '../components/PartyCharacter'
import { RoundResultRenderer } from '../components/RoundResultRenderer'
import { CombatActions } from '../components/CombatActions'

export const Combat = () => {
  const {
    party,
    enemyParty,
    activeCharacter,
    queue,
    targets,
    selectedSkill,
    selectedTarget,
    onTargetsSelect,
    onSkillSelect,
  } = useCombatContext()
  const { combatLog } = useCombatLogContext()
  if (!activeCharacter) return <span>refresh to do combat again</span>
  return (
    <FlexContainer style={{ height: '100vh' }}>
      <FlexContainer $full $direction='column' style={{ padding: 10 }}>
        <BoxContainer>
          {queue.map((c) => (
            <span>
              {c.name} {`>`}
            </span>
          ))}
        </BoxContainer>
        <FlexContainer style={{ justifyContent: 'space-around' }}>
          {enemyParty.characters.map((c) => (
            <div>
              <PartyCharacter
                hoverable={selectedSkill !== undefined}
                selected={selectedTarget && c.id === selectedTarget.id}
                onClick={() => onTargetsSelect(c)}
                activeCharacter={activeCharacter}
                character={c}
              />
            </div>
          ))}
        </FlexContainer>
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
              <PartyCharacter activeCharacter={activeCharacter} character={c} />
            </div>
          ))}
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
