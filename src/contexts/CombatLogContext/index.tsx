import React, { createContext, useContext, useState, useEffect } from 'react'
import { useCombatContext } from '../CombatContext'
import { Monospace } from '../../elements/monospace'
import { NameSpanBuilder, SkillSpan, Span } from './util'
import { getDamageResistance } from '../../game/Character/util'
import { STATUS_CONFIG } from '../../game/Status/constants'

export interface CombatLogContextT {
  combatLog: JSX.Element[]
  clear: () => void
}
const defualtValue: CombatLogContextT = {
  combatLog: [],
  clear: () => {},
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
  const clear = () => setCombatLog([])
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
        if (character.health <= 0 && !deadLog[character.id]) {
          setDeadLog((dLog) => ({ ...dLog, [character.id]: true }))
          log(<span>{Span('lightcoral', `${character.name} died.`)}</span>)
        }
      })
    }, 5)
  }, [enemyParty, party])

  useEffect(() => {
    if (activeRound && activeRound) {
      log(
        <span>
          {NameSpan(activeRound.sourceResult.source)} uses{' '}
          {SkillSpan(activeRound.sourceResult.skill)}.
        </span>,
      )
    }
  }, [activeRound])

  useEffect(() => {
    if (roundResults.length === 0) return
    const latestRounds = roundResults[roundResults.length - 1]
    const baseRound = latestRounds.sourceResult
    if (!baseRound) return

    if (baseRound.skill.damage && baseRound.passedCount === 0) {
      log(<span>{baseRound.source.name}'s attack missed.</span>)
    }
    if (!baseRound.skill.damage && !baseRound.perfect) {
      log(<span>{SkillSpan(baseRound.skill)} failed.</span>)
    }
    if (baseRound.criticalHitSuccess) {
      log(<span>{Span('gold', 'Critical Hit!')}</span>)
    }
    if (baseRound.perfect && baseRound.rollResults.length > 0) {
      log(<span>{Span('gold', 'Perfect!')}</span>)
    }
    latestRounds.targetResults.forEach((round) => {
      const targetParty = party.id === round.source.partyId ? enemyParty : party
      if (round.passedCount > 0) {
        if (round.dodgeSuccess) {
          log(<span>{NameSpan(round.target)} dodged the attack.</span>)
        } else if (round.totalDamage.value > 0) {
          log(
            <span>
              {SkillSpan(round.skill)} deals{' '}
              {Span('white', `${round.loggedDamgge.value} damage`)} to{' '}
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
        if (round.splashDamage.value > 0) {
          targetParty.characters
            .filter((c) => c.id !== round.target.id && c.health > 0)
            .forEach((subTarget) => {
              const splashDamageResistance = getDamageResistance(
                subTarget,
                round.splashDamage,
              )
              log(
                <span>
                  {SkillSpan(round.skill)} deals{' '}
                  {Span(
                    'white',
                    `${
                      round.splashDamage.value - splashDamageResistance
                    } splash damage`,
                  )}{' '}
                  to {NameSpan(subTarget)}.
                </span>,
              )
            })
        }

        if (round.reflectedDamage.value > 0) {
          log(
            <span>
              {NameSpan(round.target)} reflected{' '}
              {Span('white', `${round.reflectedDamage.value} damage`)}
            </span>,
          )
        }

        /* TODO
        if (round.healing > 0) {
          log(
            <span>
              {NameSpan(round.target)} gained{' '}
              {Span('white', `${round.healing} HP`)} from{' '}
              {SkillSpan(round.skill)}
            </span>,
          )
        }
        */

        round.addedStatus.forEach((status) => {
          const statusConfig = STATUS_CONFIG[status]
          log(
            <span>
              {NameSpan(round.target)} became {status}
              {statusConfig.duration > 0
                ? ` (${statusConfig.duration} turns)`
                : ''}
              .
            </span>,
          )
        })
      }
    })
  }, [roundResults.length])

  return (
    <CombatLogContext.Provider value={{ combatLog, clear }}>
      {children}
    </CombatLogContext.Provider>
  )
}
