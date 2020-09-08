import { tProcessedCharacter } from '../game/Character/type'
import React, { useState, useEffect } from 'react'
import { useCombatContext } from '../contexts/CombatContext'

export const usePlayerCharacterNotifications = (
  character: tProcessedCharacter,
  push: (c: JSX.Element, type?: string) => void,
) => {
  const health = character.health
  const status = character.status.map((s) => s.type)
  const { roundResults } = useCombatContext()
  const [previousHealth, setPreviousHealth] = useState(health)
  useEffect(() => {
    const diff = previousHealth - health
    if (diff > 0) {
      push(<span style={{ fontFamily: 'Bangers' }}>- {diff} health</span>)
    }
    if (diff < 0) {
      push(
        <span style={{ fontFamily: 'Bangers' }}>
          + {Math.abs(diff)} health
        </span>,
        'good',
      )
    }
    setPreviousHealth(health)
  }, [health])

  useEffect(() => {
    const lastRound = roundResults[roundResults.length - 1]
    if (lastRound) {
      const chResult = lastRound.targetResults.find(
        (r) => r.target.id === character.id,
      )
      if (chResult) {
        if (chResult.dodgeSuccess) {
          push(<span style={{ fontFamily: 'Bangers' }}>Dodged</span>, 'base')
        }
        if (chResult.addedStatus.length > 0) {
          chResult.addedStatus.forEach((status) => {
            push(
              <span style={{ fontFamily: 'Bangers' }}>{status}</span>,
              'base',
            )
          })
        }
      }
      if (
        lastRound.sourceResult.source.id === character.id &&
        !lastRound.sourceResult.accuracySuccess
      ) {
        push(<span style={{ fontFamily: 'Bangers' }}>Missed</span>, 'base')
      }
    }
  }, [roundResults])
}
