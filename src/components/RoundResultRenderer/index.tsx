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
  result: boolean | undefined
}
export const RoundResult = (props: RoundResultPropsT) => {
  const { rounds, close } = props
  const round = rounds[0]
  const [roundResults, setRoundResults] = useState<CheckKVT[]>([
    ...round.rollResults.map((result, i) => ({
      label: round.skill.rolls[i].key || '<NULL>',
      result: undefined,
    })),
    {
      label: 'accuracy',
      result: undefined,
    },
  ])

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const updateRoundResult = (value: CheckKVT, index: number) =>
    setRoundResults((r) => r.map((r, i) => (i === index ? value : r)))

  useEffect(() => {
    if (!round) return
    if (currentIndex < roundResults.length - 1) {
      setTimeout(() => {
        updateRoundResult(
          {
            label: round.skill.rolls[currentIndex].key || '<NULL>',
            result: round.rollResults[currentIndex].result,
          },
          currentIndex,
        )
        setCurrentIndex((i) => i + 1)
      }, 200)
    } else {
      if (currentIndex === roundResults.length) {
        setTimeout(() => {
          close()
        }, 600)
      } else {
        setTimeout(() => {
          updateRoundResult(
            {
              label: 'accuracy',
              result: round.accuracySuccess,
            },
            currentIndex,
          )
        }, 200)
      }
    }
  }, [roundResults])

  const targetName =
    rounds.length > 1 ? `${rounds.length} characters` : round.target.name

  return (
    <FlexContainer $direction='column' style={{ textAlign: 'center' }}>
      <h4 style={{ margin: '0 0 20px 0' }}>
        {round.source.name} uses {round.skill.name} on {targetName}
      </h4>
      <FlexContainer style={{ justifyContent: 'center' }}>
        {roundResults.map((result) => (
          <FlexContainer $direction='column' style={{ marginRight: 10 }}>
            <span>
              {result.result === undefined
                ? Span('rgba(255,255,255,0.4)', result.label)
                : result.result === true
                ? Span('lightgreen', result.label)
                : Span('lightcoral', result.label)}
            </span>
          </FlexContainer>
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
