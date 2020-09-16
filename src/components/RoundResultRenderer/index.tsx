import React, { useEffect, useState } from 'react'
import { useCombatContext } from '../../contexts/CombatContext'
import { useModalContext } from '../../contexts/ModalContext'
import { FlexContainer } from '../../elements/flex'
import Kefir from 'kefir'
import { SkillCheck } from '../SkillChecks'
import { PLAYER_PARTY_ID } from '../../game/Party/constants'
import Color from 'color'
import { Perfect } from './Perfect'
import { Theme } from '../../theme'
import { CHARACTER_CLASS_COLORS } from '../../game/Character/constants'

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
      <FlexContainer style={{ height: 290 }}>
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
  const color = Color(
    CHARACTER_CLASS_COLORS[targetResult?.target?.class || 'enemy'],
  )
    .lighten(0.5)
    //.saturate(2)
    .hex()
    .toString()
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
        <div
          style={{
            marginTop: 24,
            //background: Theme.darkBgColor,
            fontSize: 32,
            padding: '16px 32px',
            color: 'rgba(255,255,255,0.8)',
            //fontWeight: 'bolder',
            textShadow: '1px 1px 1px black',
          }}
        >
          <strong
            style={{
              fontWeight: 'bold',
              color: isPlayer(round.source.partyId)
                ? 'white'
                : Theme.enemyPartyColor,
            }}
          >
            {round.source.name}
          </strong>{' '}
          uses{' '}
          <span style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 'bold' }}>
            {round.skill.name}
          </span>
          {showTarget && (
            <span>
              {' on '}
              <strong
                style={{
                  fontWeight: 'bold',
                  color: isPlayer(targetResult?.target.partyId || '')
                    ? 'white'
                    : Theme.enemyPartyColor,
                }}
              >
                {targetResult?.target.name}
              </strong>
            </span>
          )}
        </div>
      </FlexContainer>
      <Perfect show={showPerfect} partyId={round.source.partyId} />
    </FlexContainer>
  )
}
