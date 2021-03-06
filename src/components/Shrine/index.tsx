import React, { useState, useEffect } from 'react'
import Kefir from 'kefir'
import { BoxContainer } from '../../elements/box'
import { useGameStateContext } from '../../contexts/GameStateContext'
import { tShrineEncounter } from '../../game/Encounter/type'
import { SkillChecks } from '../SkillChecks'
import { usePartyContext } from '../../contexts/PartyContext'
import { FlexContainer } from '../../elements/flex'
import { Button } from '../../elements/button'
import { tProcessedCharacter } from '../../game/Character/type'
import { resolveCheck } from '../../game/Roll/util'
import { ZERO_REWARD } from '../../game/Encounter/constants'
import { commitRewards } from '../../game/Party/util'
import { Theme } from '../../theme'
import { useModalContext } from '../../contexts/ModalContext'
import { CombatVictoryModalPure } from '../CombatVictoryModal/pure'

export interface ShrinePropsT {}
export const Shrine = (props: ShrinePropsT) => {
  const { currentEncounter } = useGameStateContext()
  const { open, close } = useModalContext()
  const { party, rawParty, updateParty, equipItem } = usePartyContext()
  const encounter = currentEncounter as tShrineEncounter
  const [results, setResults] = useState<boolean[]>([])
  const onClick = (c: tProcessedCharacter) => {
    const stream = Kefir.sequentially(
      200,
      Array(encounter.rolls - 1)
        .fill(0)
        .map((_, i) => ({
          index: i,
          result: resolveCheck(c, encounter.stat),
        })),
    )
    stream.onValue((value) => {
      setResults((r) => [...r, value.result])
    })
    stream.onEnd(() => {})
  }

  useEffect(() => {
    if (results.length === encounter.rolls - 1) {
      const rewards =
        encounter.results[results.filter((r) => r === true).length]
      if (!rewards) {
        return
      }
      if (rewards.items.length > 0) {
        open(
          <CombatVictoryModalPure
            title='You got an item!'
            showOther={false}
            rewards={rewards}
            onNextClick={close}
            onEquipClick={equipItem}
          />,
        )
      }
      updateParty(commitRewards(rawParty, rewards))
    }
  }, [results])

  return (
    <BoxContainer
      style={{ margin: '20px 20px 20px 0', flex: 1 }}
      substyle={{ background: Theme.darkBgColor }}
    >
      <FlexContainer>
        <FlexContainer $direction='column'>
          <h1
            style={{
              margin: '0 0 24px 0',
              textTransform: 'capitalize',
              fontFamily: Theme.titleFont,
            }}
          >
            {encounter.stat} Shrine
          </h1>
          <div style={{ maxWidth: 300, marginBottom: 48 }}>
            Shines are optional encounters that test one character in your
            party's stats. Be careful, as if you fail, you may get a negative
            outcome!
          </div>
          <FlexContainer>
            <FlexContainer $direction='column'>
              <SkillChecks
                stat={encounter.stat}
                rolls={encounter.rolls - 1}
                results={results}
              />
              <FlexContainer style={{ justifyContent: 'center' }}>
                {party.characters.map((c) => (
                  <Button
                    onClick={() => onClick(c)}
                    disabled={results.length > 0}
                  >
                    {c.name} ({c.stats[encounter.stat]})
                  </Button>
                ))}
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
        <FlexContainer
          $direction='column'
          $full
          style={{ padding: '86px 16px 0 16px' }}
        >
          {encounter.results.map((reward, index) => (
            <FlexContainer
              style={{
                padding: 8,
                alignItems: 'center',
                marginBottom: 4,
                background:
                  results.length === encounter.rolls - 1 &&
                  index === results.filter((r) => r === true).length
                    ? 'rgba(144, 238, 144, 0.3)'
                    : 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)',
              }}
            >
              <span style={{ fontSize: 24 }}>{index}</span>
              <span
                style={{
                  display: 'inline-block',
                  marginLeft: 8,
                  textTransform: 'capitalize',
                }}
              >
                {reward.gold > 0 && ` ${reward.gold} Gold`}
                {reward.xp > 0 && ` +${reward.xp} Experience`}
                {reward.status.length > 0 && ` ${reward.status}`}
                {reward.items.length > 0 && ` Random Item`}
                {JSON.stringify(reward) === JSON.stringify(ZERO_REWARD) &&
                  ' No Effect'}
              </span>
            </FlexContainer>
          ))}
        </FlexContainer>
      </FlexContainer>
    </BoxContainer>
  )
}
