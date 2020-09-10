import React, { useEffect, useState } from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { useModalContext } from '../../contexts/ModalContext'
import { FlexContainer } from '../../elements/flex'
import Kefir from 'kefir'
import { SkillCheck } from '../SkillChecks'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import { BoxContainer } from '../../elements/box'
import { Perfect } from './Perfect'
import { Theme } from '../../theme'

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
      <FlexContainer style={{ height: 269 }}>
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
  const [activeIndex, setActiveIndex] = useState(0)
  const [roundResults, setRoundResults] = useState<CheckKVT[]>(
    !round
      ? []
      : round.rollResults.map((result, i) => ({
          label: round.skill.weaponStatOverride || round.source.weapon.stat,
          result: undefined,
        })),
  )

  const updateRoundResult = (value: CheckKVT, index: number) => {
    setActiveIndex(index)
    setRoundResults((r) => r.map((r, i) => (i === index ? value : r)))
  }

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
      Kefir.later(round.perfect ? 1200 : 900, undefined).onValue(() => {
        setIsDone(true)
      })
    })
  }, [])

  useEffect(() => {
    if (isDone) {
      close()
    }
  }, [isDone, close])

  const showPerfect = activeIndex === roundResults.length - 1 && round?.perfect
  const isPlayer = (partyId: string) => partyId === PLAYER_PARTY_ID
  const targetResult = activeRound?.targetResults[0]
  const showTarget =
    round && targetResult && targetResult.target.id !== round.source.id
  if (!round) return null
  return (
    <FlexContainer $direction='column' style={{ textAlign: 'center' }}>
      <FlexContainer style={{ justifyContent: 'center' }}>
        {roundResults.map((result, i) => (
          <SkillCheck
            key={i}
            check={result}
            perfect={showPerfect}
            skill={round.skill}
            crit={round.criticalHitSuccess}
          />
        ))}
      </FlexContainer>
      <FlexContainer style={{ justifyContent: 'center' }}>
        <BoxContainer
          style={{ marginTop: 40 }}
          substyle={{
            background: Theme.darkBgColor,
            fontSize: 20,
            padding: '16px 32px',
          }}
        >
          <strong
            style={{
              color: isPlayer(round.source.partyId)
                ? Theme.playerPartyColor
                : Theme.enemyPartyColor,
            }}
          >
            {round.source.name}
          </strong>{' '}
          uses <span style={{ color: 'plum' }}>{round.skill.name}</span>
          {showTarget && (
            <span>
              {' on '}
              <strong
                style={{
                  color: isPlayer(targetResult?.target.partyId || '')
                    ? Theme.playerPartyColor
                    : Theme.enemyPartyColor,
                }}
              >
                {targetResult?.target.name}
              </strong>
            </span>
          )}
        </BoxContainer>
      </FlexContainer>
      <Perfect show={showPerfect} partyId={round.source.partyId} />
    </FlexContainer>
  )
}
