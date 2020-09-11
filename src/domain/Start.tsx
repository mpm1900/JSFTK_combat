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
import { Theme } from '../theme'

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
        <BoxContainer
          style={{ maxWidth: 340, marginRight: 8 }}
          substyle={{ padding: 16, background: Theme.darkBgColor }}
        >
          <strong style={{ marginBottom: 16 }}>
            Choose your starting classes.
          </strong>
          <p>
            Each character class has different stats and starting items. Your
            stats determine your character's chances of succeeding in various
            checks during combat.
          </p>
          <p>
            For example, if your character has 76 Strength, then each Strength
            check has a 76% chance of succeeding.
          </p>
          <p>
            So if an attack has 4 Strength checks at 76% each, then that attack
            has a 33% chance of being "perfect." Some attacks will have special
            bonus actions when they are "perfect." Such as splash damage, or
            status effects.
          </p>
          <p>
            More power attacks may require more checks or use negative-offset
            stat values
          </p>
        </BoxContainer>
        <BoxContainer>
          <h1
            style={{
              marginTop: 8,
              textAlign: 'center',
              fontFamily: 'Bangers',
              letterSpacing: '1px',
              textShadow: '1px 3px 3px black',
            }}
          >
            Choose your Party!
          </h1>
          <FlexContainer>
            {party.characters.map((character) => (
              <FlexContainer $direction='column' style={{ padding: 4 }}>
                <StartCharacterCard
                  character={character}
                  onChange={(characterId, updater) => {
                    const rc = findRawCharacter(characterId)
                    if (rc) {
                      upsertCharacter(updater(rc))
                    }
                  }}
                />
              </FlexContainer>
            ))}
          </FlexContainer>
          <FlexContainer>
            <FullContainer />
            <RedButton
              style={{ margin: '16px 0 12px 0' }}
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
        pre-pre-pre-pre alpha v0.0.3.3
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
          background: '#222',
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
          background: '#222',
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
      <FlexContainer $direction='column' style={{ padding: 8 }}>
        {STAT_BONUS_KEYS.map((key) => (
          <FlexContainer key={key} style={{ height: 20 }}>
            <div
              style={{
                width: 60,
                fontSize: 12,
                textTransform: 'capitalize',
                marginRight: 4,
              }}
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
      </FlexContainer>
    </FlexContainer>
  )
}
