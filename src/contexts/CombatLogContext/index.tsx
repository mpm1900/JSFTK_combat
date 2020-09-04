import React, { createContext, useContext, useState, useEffect } from 'react'
import { useCombatContext } from '../CombatContext'
import { Monospace } from '../../elements/monospace'
import { NameSpanBuilder, SkillSpan, Span } from './util'
import { getDamageResistance } from '../../functions'
import { noneg } from '../../util'

export interface CombatLogContextT {
  combatLog: JSX.Element[]
}
const defualtValue: CombatLogContextT = {
  combatLog: [],
}
export const CombatLogContext = createContext<CombatLogContextT>(defualtValue)
export const useCombatLogContext = () => useContext(CombatLogContext)

type DeadLogT = Record<string, boolean | undefined>

export interface CombatLogContextProviderPropsT {
  children: JSX.Element
}
export const CombatLogContextProvider = (
  props: CombatLogContextProviderPropsT,
) => {
  const { children } = props
  const { activeRound, roundResults, enemyParty, party } = useCombatContext()
  const [combatLog, setCombatLog] = useState<JSX.Element[]>([])
  const [deadLog, setDeadLog] = useState<DeadLogT>({})
  const NameSpan = NameSpanBuilder(party, enemyParty)
  const log = (line: JSX.Element) =>
    setCombatLog((log) => [
      ...log,
      <Monospace style={{ display: 'inline-block', fontWeight: 'normal' }}>
        {line}
      </Monospace>,
    ])

  useEffect(() => {
    const characters = [...enemyParty.characters, ...party.characters]
    setTimeout(() => {
      characters.forEach((character) => {
        if (character.dead && !deadLog[character.id]) {
          setDeadLog((dLog) => ({ ...dLog, [character.id]: true }))
          log(<span>{Span('lightcoral', `${character.name} died.`)}</span>)
        }
      })
    }, 5)
  }, [enemyParty, party])

  useEffect(() => {
    if (activeRound && activeRound[0]) {
      log(
        <span>
          {NameSpan(activeRound[0].source)} uses{' '}
          {SkillSpan(activeRound[0].skill)}.
        </span>,
      )
    }
  }, [activeRound])

  useEffect(() => {
    if (roundResults.length === 0) return
    const latestRounds = roundResults[roundResults.length - 1]
    const baseRound = latestRounds[0]
    if (!baseRound) return

    if (!baseRound.accuracySuccess) {
      if (baseRound.skill.damage) {
        {
          log(<span>{baseRound.source.name}'s attack missed.</span>)
        }
      } else {
        log(<span>{SkillSpan(baseRound.skill)} failed.</span>)
      }
    }
    if (baseRound.criticalSuccess) {
      log(<span>{Span('gold', 'Critical Hit!')}</span>)
    }
    if (baseRound.perfect && baseRound.rollResults.length > 0) {
      log(<span>{Span('gold', 'Perfect!')}</span>)
    }
    latestRounds.forEach((round) => {
      const targetParty = party.id === round.source.partyId ? enemyParty : party
      if (round.accuracySuccess) {
        if (round.dodgeSuccess) {
          log(<span>{NameSpan(round.target)} dodged the attack.</span>)
        } else if (round.totalDamage.damage > 0) {
          log(
            <span>
              {SkillSpan(round.skill)} deals{' '}
              {Span('white', `${round.totalDamage.damage} damage`)} to{' '}
              {NameSpan(round.target)}.
            </span>,
          )
        } else if (round.skill.damage) {
          log(
            <span>
              {SkillSpan(round.skill)} did no damage to {NameSpan(round.target)}
              .
            </span>,
          )
        }
        if (round.splashDamage.damage > 0) {
          targetParty.characters
            .filter((c) => c.id !== round.target.id && !c.dead)
            .forEach((subTarget) => {
              const splashDamageResistance = getDamageResistance(
                subTarget,
                round.splashDamage.type,
              )
              log(
                <span>
                  {SkillSpan(round.skill)} deals{' '}
                  {Span(
                    'white',
                    `${
                      round.splashDamage.damage - splashDamageResistance
                    } splash damage`,
                  )}{' '}
                  to {NameSpan(subTarget)}.
                </span>,
              )
            })
        }

        if (round.reflectedDamage.damage > 0) {
          log(
            <span>
              {NameSpan(round.target)} reflected{' '}
              {Span('white', `${round.reflectedDamage.damage} damage`)}
            </span>,
          )
        }

        if (round.healing > 0) {
          log(
            <span>
              {NameSpan(round.target)} gained{' '}
              {Span('white', `${round.healing} HP`)} from{' '}
              {SkillSpan(round.skill)}
            </span>,
          )
        }

        round.addedStatus.forEach((tag) => {
          log(
            <span>
              {NameSpan(round.target)} became {tag.type} ({tag.duration} turns).
            </span>,
          )
        })
      }
    })
    if (baseRound.regeneratedHealth > 0) {
      log(
        <span>
          {NameSpan(baseRound.source)} gained{' '}
          {Span('white', `${baseRound.regeneratedHealth} HP`)} from HP regen.
        </span>,
      )
    }
  }, [roundResults.length])

  return (
    <CombatLogContext.Provider value={{ combatLog }}>
      {children}
    </CombatLogContext.Provider>
  )
}
