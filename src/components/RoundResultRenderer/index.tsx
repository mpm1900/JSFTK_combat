import React, { useEffect, useState } from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { useModalContext } from '../../contexts/ModalContext'
import { TargetSkillResultT } from '../../types'
import { Span } from '../../contexts/CombatLogContext/util'
import { FlexContainer } from '../../elements/flex'

export const RoundResultRenderer = () => {
  const { activeRound, commit } = useCombatContext()
  const { open, close, setCallback } = useModalContext()

  useEffect(() => {
    if (activeRound) {
      open(
        <RoundResult rounds={activeRound} close={() => close(true)} />,
        {},
        true,
        () => {
          commit()
        },
      )
    }
  }, [activeRound, open, close, commit])

  return null
}

export interface RoundResultPropsT {
  rounds: TargetSkillResultT[]
  close: () => void
}
export interface CheckKVT {
  label: string
  result: boolean
}
export const RoundResult = (props: RoundResultPropsT) => {
  const { rounds, close } = props
  const [roundResults, setRoundResults] = useState<CheckKVT[]>([])
  const [accuracyReuslt, setAccuracyResult] = useState<CheckKVT | undefined>()
  const round = rounds[0]

  useEffect(() => {
    if (!round) return
    if (!(round.rollResults.length === roundResults.length)) {
      setTimeout(() => {
        setRoundResults((r) => [
          ...r,
          {
            label: round.skill.rolls[roundResults.length].key || '<null>',
            result: round.rollResults[roundResults.length].result,
          },
        ])
      }, 500)
    } else {
      if (accuracyReuslt) {
        setTimeout(() => {
          close()
        }, 1000)
      } else {
        setTimeout(() => {
          setAccuracyResult({
            label: 'accuracy',
            result: round.accuracySuccess,
          })
        }, 500)
      }
    }
  }, [roundResults.length, accuracyReuslt])

  if (!round) return null
  const results = accuracyReuslt
    ? [...roundResults, accuracyReuslt]
    : roundResults
  return (
    <FlexContainer $direction='column'>
      <h4>
        {round.source.name} uses {round.skill.name} on {round.target.name}
      </h4>
      <FlexContainer>
        {results.map((result) => (
          <FlexContainer $direction='column' style={{ marginRight: 10 }}>
            <span>{result.label}</span>
            <span>
              {result.result
                ? Span('lightgreen', 'PASSED')
                : Span('lightcoral', 'FALLED')}
            </span>
          </FlexContainer>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
