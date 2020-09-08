import React, { useEffect, useState } from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { useModalContext } from '../../contexts/ModalContext'
import { NameSpanBuilder } from '../../contexts/CombatLogContext/util'
import { FlexContainer } from '../../elements/flex'
import Kefir from 'kefir'
import { SkillCheck } from '../SkillChecks'

export interface RoundResultRendererPropsT {
  isModal?: boolean
}
export const RoundResultRenderer = (props: RoundResultRendererPropsT) => {
  const { isModal = true } = props
  const { activeRound, isRunning, commit } = useCombatContext()
  const { open, close } = useModalContext()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (activeRound && !isOpen && isRunning) {
      setIsOpen(true)
      if (isModal) {
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
    }
  }, [isRunning, isModal, isOpen, activeRound, open, close, commit])

  if (!isModal && activeRound && isRunning) {
    return (
      <FlexContainer style={{ height: 315 }}>
        <RoundResult
          close={() => {
            setIsOpen(false)
            commit()
          }}
        />
      </FlexContainer>
    )
  }
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
  const { activeRound } = useCombatContext()
  const [isDone, setIsDone] = useState(false)
  const round = activeRound?.sourceResult
  const [roundResults, setRoundResults] = useState<CheckKVT[]>(
    !round
      ? []
      : round.rollResults.map((result, i) => ({
          label: round.skill.weaponStatOverride || round.source.weapon.stat,
          result: undefined,
        })),
  )

  const updateRoundResult = (value: CheckKVT, index: number) =>
    setRoundResults((r) => r.map((r, i) => (i === index ? value : r)))

  useEffect(() => {
    if (!round) return
    const stream = Kefir.sequentially(
      200,
      roundResults.map((r, i) => ({ ...r, index: i })),
    )
    stream.onValue((result) => {
      updateRoundResult(
        {
          label: result.label,
          result: round.rollResults[result.index],
        },
        result.index,
      )
    })
    stream.onEnd(() => {
      Kefir.later(600, undefined).onValue(() => {
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

  return (
    <FlexContainer $direction='column' style={{ textAlign: 'center' }}>
      <FlexContainer style={{ justifyContent: 'space-evenly' }}>
        {roundResults.map((result, i) => (
          <SkillCheck key={i} check={result} />
        ))}
      </FlexContainer>
    </FlexContainer>
  )
}
