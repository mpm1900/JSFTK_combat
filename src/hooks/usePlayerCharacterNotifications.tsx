import { tProcessedCharacter } from '../game/Character/type'
import React, { useState, useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'

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
      push(<span style={{ fontFamily: 'Bangers' }}>- {healthDiff}</span>)
    }
    if (healthDiff < 0) {
      push(
        <span style={{ fontFamily: 'Bangers' }}>+ {Math.abs(healthDiff)}</span>,
        'good',
      )
    }
    if (level > previousLevel) {
      push(
        <span style={{ fontFamily: 'Bangers', fontSize: 36 }}>Level Up!</span>,
        'good',
      )
    }
    setPreviousLevel(level)
    setPreviousHealth(health)
  }, [health, level])

  useEffect(() => {
    const lastRound = roundResults[roundResults.length - 1]
    if (lastRound) {
      const chResult = lastRound.targetResults.find(
        (r) => r.target.id === character.id,
      )
      if (chResult) {
        if (chResult.dodgeSuccess) {
          push(<span style={{ fontFamily: 'Bangers' }}>Dodged!</span>, 'base')
        }
        if (
          !chResult.dodgeSuccess &&
          chResult.accuracySuccess &&
          chResult.skill.damage &&
          chResult.loggedDamgge.value <= 0
        ) {
          push(<span style={{ fontFamily: 'Bangers' }}>Blocked!</span>, 'base')
        }
        if (chResult.addedStatus.length > 0) {
          chResult.addedStatus.forEach((status) => {
            push(
              <span style={{ fontFamily: 'Bangers' }}>{status}</span>,
              'base',
            )
          })
        }
        if (chResult.perfect && chResult.skill.perfectPierce) {
          push(<span style={{ fontFamily: 'Bangers' }}>Pierced!</span>, 'base')
        }
        if (chResult.criticalHitSuccess) {
          push(<span style={{ fontFamily: 'Bangers' }}>Critical!</span>, 'base')
        }
      }
      if (
        lastRound.sourceResult.source.id === character.id &&
        !lastRound.sourceResult.accuracySuccess
      ) {
        push(<span style={{ fontFamily: 'Bangers' }}>Missed!</span>, 'base')
      }
    }
  }, [roundResults])
}
