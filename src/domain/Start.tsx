import React, { useEffect } from 'react'
import { FullContainer, FlexContainer } from '../elements/flex'
import { BoxContainer } from '../elements/box'
import { usePartyContext } from '../contexts/PartyContext'
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
import { AppHeader } from '../components/AppHeader'
import { HeadingSm } from '../elements/typography'
import { Gauge2 } from '../components/Gauge/v2'

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
      <AppHeader
        left={
          <Monospace
            style={{
              fontWeight: 'normal',
              color: 'rgba(255,255,255,0.5)',
              fontSize: 12,
            }}
          >
            alpha-0.0.4.20
          </Monospace>
        }
      >
        <span
          style={{ color: 'white', lineHeight: '52px', whiteSpace: 'nowrap' }}
        >
          I am looking for help with: item, and enemy, and general design! If
          you would like to help, shoot me a message or head over to my github
        </span>
      </AppHeader>
      <FullContainer />
      <FlexContainer $full>
        <FullContainer />
        <BoxContainer
          style={{
            maxWidth: 340,
            marginRight: 8,
          }}
          substyle={{
            padding: 16,
            background: Theme.darkBgColor,
            lineHeight: 1.4,
            fontSize: 14,
          }}
        >
          <HeadingSm
            style={{
              marginTop: 8,
            }}
          >
            About this game
          </HeadingSm>
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
              fontFamily: Theme.titleFont,
              textShadow: '1px 3px 3px black',
              color: 'rgba(255,255,255,1)',
            }}
          >
            Choose your Party!
          </h1>
          <FlexContainer>
            {party.characters.map((character) => (
              <FlexContainer
                key={character.id}
                $direction='column'
                style={{ padding: 4 }}
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
    <FlexContainer $direction='column' style={{ width: 200 }}>
      <input
        style={{
          background: Theme.mediumBgColor,
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
          background: Theme.mediumBgColor,
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
        <option value='executioner'>Executioner</option>
        <option value='ranger'>Ranger</option>
        <option value='student'>Student</option>
        <option value='patrician'>Patrician</option>
        <option value='reaper'>Reaper</option>
        <option value='drifter'>Drifter</option>
      </select>
      <FlexContainer $direction='column' style={{ padding: 8 }}>
        {STAT_BONUS_KEYS.map((key) => (
          <FlexContainer key={key} style={{ height: 20 }}>
            <div
              style={{
                width: 80,
                fontSize: 12,
                textTransform: 'capitalize',
                marginRight: 4,
              }}
            >
              {key}
            </div>
            <FullContainer>
              <Gauge2
                max={40}
                value={character.stats[key] - 40}
                color='rgba(255,255,255,0.6)'
                height={15}
              />
            </FullContainer>
          </FlexContainer>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
