import { tProcessedCharacter } from '../game/Character/type'
import React, { useState, useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'
import { Theme } from '../theme'
import { hasImmunity } from '../game/Character/util'

export const usePlayerCharacterNotifications = (
  character: tProcessedCharacter,
  push: (c: JSX.Element, type?: string) => void,
) => {
  const health = character.health
  const level = character.level
  const { roundResults } = useCombatContext()
  const [previousHealth, setPreviousHealth] = useState(health)
  const [previousLevel, setPreviousLevel] = useState(level)
  useEffect(() => {
    const healthDiff = previousHealth - health
    if (healthDiff > 0) {
      push(<span style={{ fontFamily: Theme.titleFont }}>- {healthDiff}</span>)
    }
    if (healthDiff < 0) {
      push(
        <span style={{ fontFamily: Theme.titleFont }}>
          + {Math.abs(healthDiff)}
        </span>,
        'good',
      )
    }
    if (level > previousLevel) {
      push(
        <span style={{ fontFamily: Theme.titleFont, fontSize: 36 }}>
          Level Up!
        </span>,
        'good',
      )
    }
    setPreviousLevel(level)
    setPreviousHealth(health)
  }, [health, level])

  useEffect(() => {
    const lastRound = roundResults[roundResults.length - 1]
    if (lastRound) {
      if (
        lastRound.sourceResult.weaponDidBreak &&
        lastRound.sourceResult.source.id === character.id
      ) {
        push(
          <span style={{ fontFamily: Theme.titleFont, fontSize: 36 }}>
            Weapon Break!
          </span>,
        )
      }
      const chResult = lastRound.targetResults.find(
        (r) => r.target.id === character.id,
      )
      if (chResult) {
        if (chResult.dodgeSuccess) {
          push(
            <span style={{ fontFamily: Theme.titleFont }}>Dodged!</span>,
            'base',
          )
        }
        if (
          !chResult.dodgeSuccess &&
          chResult.accuracySuccess &&
          chResult.skill.damage &&
          chResult.loggedDamgge.value <= 0
        ) {
          push(
            <span style={{ fontFamily: Theme.titleFont }}>Blocked!</span>,
            'base',
          )
        }
        if (chResult.addedStatus.length > 0) {
          chResult.addedStatus.forEach((status) => {
            if (hasImmunity(character, status)) {
              push(
                <span style={{ fontFamily: Theme.titleFont }}>Immune</span>,
                'base',
              )
            } else {
              push(
                <span
                  style={{
                    textTransform: 'capitalize',
                    fontFamily: Theme.titleFont,
                  }}
                >
                  {status}
                </span>,
                'base',
              )
            }
          })
        }
        if (chResult.perfect && chResult.skill.perfectPierce) {
          push(
            <span style={{ fontFamily: Theme.titleFont }}>Pierced!</span>,
            'base',
          )
        }
        if (chResult.criticalHitSuccess) {
          push(
            <span style={{ fontFamily: Theme.titleFont }}>Critical!</span>,
            'base',
          )
        }
      }
      if (
        lastRound.sourceResult.source.id === character.id &&
        !lastRound.sourceResult.accuracySuccess
      ) {
        push(
          <span style={{ fontFamily: Theme.titleFont }}>Missed!</span>,
          'base',
        )
      }
    }
  }, [roundResults])
}
