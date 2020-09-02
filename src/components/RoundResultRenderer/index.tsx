import React, { useEffect, useState } from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { useModalContext } from '../../contexts/ModalContext'
import { Span, NameSpanBuilder } from '../../contexts/CombatLogContext/util'
import { FlexContainer } from '../../elements/flex'

export const RoundResultRenderer = () => {
  const { activeRound, commit } = useCombatContext()
  const { open, close, setCallback } = useModalContext()

  useEffect(() => {
    if (activeRound) {
      console.log(activeRound[0].skill)
      open(<RoundResult close={() => close(true)} />, {}, true, () => {
        commit()
      })
    }
  }, [activeRound, open, close, commit])

  return null
}

export interface RoundResultPropsT {
  close: () => void
}
export interface CheckKVT {
  label: string
  result: boolean | undefined
}
export const RoundResult = (props: RoundResultPropsT) => {
  const { close } = props
  const { activeRound, party, enemyParty } = useCombatContext()
  const NameSpan = NameSpanBuilder(party, enemyParty)
  const rounds = activeRound || []
  const round = rounds[0]
  const [roundResults, setRoundResults] = useState<CheckKVT[]>(
    !round
      ? []
      : [
          ...round.rollResults.map((result, i) => ({
            label: round.skill.rolls[i].key || '<NULL>',
            result: undefined,
          })),
          ...(round.skill.accuracy
            ? [
                {
                  label: 'accuracy',
                  result: undefined,
                },
              ]
            : []),
        ],
  )

  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const updateRoundResult = (value: CheckKVT, index: number) =>
    setRoundResults((r) => r.map((r, i) => (i === index ? value : r)))

  useEffect(() => {
    if (!round) return
    if (currentIndex < roundResults.length - (round.skill.accuracy ? 1 : 0)) {
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
        setCurrentIndex((i) => i + 1)
      }
    }
  }, [currentIndex])

  if (!round) return null

  const target = {
    ...round.target,
    name: rounds.length > 1 ? `${rounds.length} characters` : round.target.name,
  }

  return (
    <FlexContainer $direction='column' style={{ textAlign: 'center' }}>
      <h4 style={{ margin: '0 0 20px 0' }}>
        {NameSpan(round.source)} uses {round.skill.name} on {NameSpan(target)}
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
