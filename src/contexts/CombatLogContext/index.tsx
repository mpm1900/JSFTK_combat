import React, { createContext, useContext, useState, useEffect } from 'react'
import { useCombatContext } from '../CombatContext'
import { Monospace } from '../../elements/monospace'
import { NameSpanBuilder, SkillSpan, Span } from './util'
import { getDamageResistance } from '../../functions'

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
  const { roundResults, enemyParty, party } = useCombatContext()
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
    characters.forEach((character) => {
      if (character.dead && !deadLog[character.id]) {
        setDeadLog((dLog) => ({ ...dLog, [character.id]: true }))
        log(<span>{Span('lightcoral', `${character.name} died.`)}</span>)
      }
    })
  }, [enemyParty, party])

  useEffect(() => {
    if (roundResults.length === 0) return
    const latestRounds = roundResults[roundResults.length - 1]
    const baseRound = latestRounds[0]
    if (!baseRound) return
    log(
      <span>
        {NameSpan(baseRound.source)} uses {SkillSpan(baseRound.skill)}.
      </span>,
    )
    if (!baseRound.accuracySuccess) {
      {
        log(<span>{baseRound.source.name}'s attack missed.</span>)
      }
    }
    if (baseRound.criticalSuccess) {
      log(<span>{Span('gold', 'Critical Hit!')}</span>)
    }
    if (baseRound.perfect) {
      log(<span>{Span('gold', 'Perfect!')}</span>)
    }
    latestRounds.forEach((round) => {
      const targetParty = party.id === round.source.partyId ? enemyParty : party
      if (round.accuracySuccess) {
        if (round.dodgeSuccess) {
          log(<span>{NameSpan(round.target)} dodged the attack.</span>)
        } else {
          log(
            <span>
              {round.skill.name} deals{' '}
              {Span('white', `${round.totalDamage.damage} damage`)} to{' '}
              {NameSpan(round.target)}.
            </span>,
          )
        }
        if (round.splashDamage.damage > 0) {
          targetParty.characters
            .filter((c) => c.id !== round.target.id)
            .forEach((subTarget) => {
              const splashDamageResistance = getDamageResistance(
                subTarget,
                round.splashDamage.type,
              )
              log(
                <span>
                  {round.skill.name} deals{' '}
                  {Span(
                    'white',
                    `${
                      round.splashDamage.damage - splashDamageResistance
                    } damage`,
                  )}{' '}
                  to {NameSpan(subTarget)}.
                </span>,
              )
            })
        }
      }
    })
  }, [roundResults.length])

  return (
    <CombatLogContext.Provider value={{ combatLog }}>
      {children}
    </CombatLogContext.Provider>
  )
}
