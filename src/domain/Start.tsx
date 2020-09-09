import React, { useEffect } from 'react'
import { FullContainer, FlexContainer } from '../elements/flex'
import { BoxContainer } from '../elements/box'
import { usePartyContext } from '../contexts/PartyContext'
import { Gauge } from '../components/Gauge'
import { RedButton } from '../elements/button'
import { useHistory } from 'react-router'
import { INITIAL_STATE } from '../state/party'
import { Monospace } from '../elements/monospace'
import { useGameStateContext } from '../contexts/GameStateContext'
import {
  tProcessedCharacter,
  tCharacter,
  tCharacterClass,
} from '../game/Character/type'
import { makeCharacter } from '../game/Character/util'
import { STAT_BONUS_KEYS } from '../game/Stats/constants'

export const Start = () => {
  const {
    party,
    updateParty,
    upsertCharacter,
    findRawCharacter,
  } = usePartyContext()
  const history = useHistory()
  const { reset } = useGameStateContext()
  useEffect(() => {
    updateParty(INITIAL_STATE)
    reset()
  }, [])
  return (
    <FlexContainer
      $full
      $direction='column'
      style={{ height: '100%', overflow: 'hidden' }}
    >
      <FullContainer />
      <FlexContainer $full>
        <FullContainer />
        <BoxContainer>
          <h1
            style={{ marginTop: 0, textAlign: 'center', fontFamily: 'Bangers' }}
          >
            Choose your Party!
          </h1>
          <FlexContainer>
            {party.characters.map((character) => (
              <BoxContainer
                key={character.id}
                substyle={{ background: '#111' }}
              >
                <StartCharacterCard
                  character={character}
                  onChange={(characterId, updater) => {
                    const rc = findRawCharacter(characterId)
                    if (rc) {
                      upsertCharacter(updater(rc))
                    }
                  }}
                />
              </BoxContainer>
            ))}
          </FlexContainer>
          <FlexContainer>
            <FullContainer />
            <RedButton
              style={{ marginTop: 16 }}
              onClick={() => {
                history.push('/JSFTK_combat/party')
              }}
            >
              Begin Adventure
            </RedButton>
            <FullContainer />
          </FlexContainer>
        </BoxContainer>
        <FullContainer />
      </FlexContainer>
      <FullContainer />
      <Monospace
        style={{
          fontWeight: 'normal',
          color: 'rgba(255,255,255,0.5)',
          fontSize: 12,
        }}
      >
        pre-pre-pre-pre alpha v0.0.1.11
      </Monospace>
    </FlexContainer>
  )
}

export interface StartCharacterCardPropsT {
  character: tProcessedCharacter
  onChange: (
    characterId: string,
    updater: (c: tCharacter) => tCharacter,
  ) => void
}
export const StartCharacterCard = (props: StartCharacterCardPropsT) => {
  const { character, onChange } = props
  return (
    <FlexContainer $direction='column'>
      <input
        style={{
          background: '#333',
          border: '1px solid rgba(255,255,255,0.4)',
          padding: 8,
          color: 'white',
          marginBottom: 8,
        }}
        value={character.name}
        onChange={(e) => {
          onChange(character.id, (c) => ({
            ...c,
            name: e.target.value,
          }))
        }}
      />
      <select
        style={{
          background: '#333',
          border: '1px solid rgba(255,255,255,0.4)',
          padding: 8,
          color: 'white',
          marginBottom: 8,
        }}
        value={character.class}
        onChange={(e) => {
          onChange(character.id, (c) => ({
            ...makeCharacter(e.target.value as tCharacterClass),
            id: character.id,
            name: character.name,
          }))
        }}
      >
        <option value='blacksmith'>blacksmith</option>
        <option value='hunter'>hunter</option>
        <option value='scholar'>scholar</option>
        <option value='bard'>bard</option>
      </select>
      <BoxContainer>
        {STAT_BONUS_KEYS.map((key) => (
          <FlexContainer key={key} style={{ height: 20 }}>
            <div
              style={{ width: 60, fontSize: 12, textTransform: 'capitalize' }}
            >
              {key}
            </div>
            <FullContainer>
              <Gauge
                max={100}
                value={character.stats[key]}
                color='white'
                height={15}
              />
            </FullContainer>
          </FlexContainer>
        ))}
      </BoxContainer>
    </FlexContainer>
  )
}
