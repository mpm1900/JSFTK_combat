import React, { useEffect, useState } from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { useModalContext } from '../../contexts/ModalContext'
import { Span, NameSpanBuilder } from '../../contexts/CombatLogContext/util'
import { FlexContainer } from '../../elements/flex'
import Kefir from 'kefir'
import { Stream } from 'stream'
import { SkillCheck } from '../SkillChecks'

export const RoundResultRenderer = () => {
  const { activeRound, commit } = useCombatContext()
  const { open, close } = useModalContext()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (activeRound && !isOpen) {
      setIsOpen(true)
      open(
        <RoundResult
          close={() => {
            close(true)
            setIsOpen(false)
            commit()
          }}
        />,
        {
          overlay: {
            background: 'transparent',
          },
        },
        true,
      )
    }
  }, [isOpen, activeRound, open, close, commit])

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
  const [isDone, setIsDone] = useState(false)
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

  const updateRoundResult = (value: CheckKVT, index: number) =>
    setRoundResults((r) => r.map((r, i) => (i === index ? value : r)))

  useEffect(() => {
    const stream = Kefir.sequentially(
      200,
      roundResults.map((r, i) => ({ ...r, index: i })),
    )
    stream.onValue((result) => {
      updateRoundResult(
        {
          label: result.label,
          result:
            result.label === 'accuracy'
              ? round.accuracySuccess
              : round.rollResults[result.index].result,
        },
        result.index,
      )
    })
    stream.onEnd(() => {
      Kefir.later(500, undefined).onValue(() => {
        setIsDone(true)
      })
    })
  }, [])

  useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

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
      <FlexContainer style={{ justifyContent: 'space-evenly' }}>
        {roundResults.map((result) => (
          <SkillCheck check={result} />
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
