import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react'
import { usePartyContext } from '../PartyContext'
import { v4 } from 'uuid'
import { useHistory } from 'react-router'
import { useModalContext } from '../ModalContext'
import { CombatVictoryModal } from '../../components/CombatVictoryModal'
import { tProcessedParty, tParty } from '../../game/Party/type'
import { tProcessedCharacter } from '../../game/Character/type'
import { tSkill, tSkillResult, tSkillTarget } from '../../game/Skill/type'
import { tQueue } from '../../game/Queue/type'
import {
  processParty,
  makeParty,
  getRolledRewards,
} from '../../game/Party/util'
import {
  processCharacter,
  makeCharacter,
  removeTemporaryStatus,
} from '../../game/Character/util'
import { makeCombatQueue, getFirst } from '../../game/Queue/util'
import {
  makeSkillTarget,
  resolveSkillTarget,
  getSkillResult,
} from '../../game/Skill/util'
import { commitSkillResults } from '../../game/Skill/committer'
import { getAIAction } from '../../game/AI/util'

export interface CombatContextT {
  party: tProcessedParty
  enemyParty: tProcessedParty
  activeCharacter: tProcessedCharacter
  characters: tProcessedCharacter[]
  queue: tQueue
  selectedSkill: tSkill | undefined
  selectedTargets: tProcessedCharacter[]
  selectedConsumableIndex: number | undefined
  roundResults: tSkillResult[]
  activeRound: tSkillResult | undefined
  isRunning: boolean
  isRenderingResult: boolean
  onSkillSelect: (skill: tSkill, consumableIndex?: number) => void
  onTargetsSelect: (target: tProcessedCharacter | tProcessedParty) => void
  onConsumableSelect: (consumableIndex: number | undefined) => void
  reset: () => void
  start: () => void
  next: (nextTarget?: tProcessedCharacter | tProcessedParty) => void
  commit: () => void
}
const defaultValue: CombatContextT = {
  party: processParty(makeParty()),
  enemyParty: processParty(makeParty()),
  activeCharacter: processCharacter(makeCharacter('blacksmith')),
  characters: [],
  queue: {},
  selectedSkill: undefined,
  selectedTargets: [],
  selectedConsumableIndex: undefined,
  roundResults: [],
  activeRound: undefined,
  isRunning: false,
  isRenderingResult: false,
  onSkillSelect: (skill: tSkill) => {},
  onTargetsSelect: (target: tProcessedCharacter | tProcessedParty) => {},
  onConsumableSelect: (consumableIndex) => {},
  reset: () => {},
  start: () => {},
  next: () => {},
  commit: () => {},
}
export const CombatContext = createContext<CombatContextT>(defaultValue)
export const useCombatContext = () => useContext(CombatContext)

export interface CombatContextProviderPropsT {
  children: JSX.Element
  enemyParty: tParty
  setEnemyParty: (party: tParty) => void
  onRequestNewParty: () => void
}
export const CombatContextProvider = (props: CombatContextProviderPropsT) => {
  const { children, setEnemyParty, onRequestNewParty } = props
  const { party, rawParty, updateParty } = usePartyContext()
  const { open } = useModalContext()
  const history = useHistory()
  const enemyParty = useMemo(() => processParty(props.enemyParty), [
    props.enemyParty,
  ])
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isRenderingResult, setIsRenderingResult] = useState<boolean>(false)
  const characters = useMemo(
    () => [...party.characters, ...enemyParty.characters],
    [party, enemyParty],
  )
  const [queue, setQueue] = useState<tQueue>(
    makeCombatQueue([...party.characters, ...enemyParty.characters]),
  )
  const resultCommitter = useMemo(
    () => commitSkillResults(rawParty, props.enemyParty, queue),
    [rawParty, props.enemyParty, queue],
  )
  const [roundId, setRoundId] = useState<string>(v4())
  const [roundResults, setRoundResults] = useState<tSkillResult[]>([])
  const [activeRound, setActiveRound] = useState<tSkillResult | undefined>()
  const [selectedTarget, setSelectedTarget] = useState<
    tSkillTarget | undefined
  >()
  const [selectedSkill, setSelectedSkill] = useState<tSkill | undefined>()
  const [selectedConsumableIndex, setSelectedConsumableIndex] = useState<
    number | undefined
  >()
  const activeCharacter = useMemo(
    () =>
      characters.find(
        (c) => c.health > 0 && c.id === getFirst(queue),
      ) as tProcessedCharacter,
    [queue, characters],
  )

  const start = () => {
    setIsRunning(true)
    setQueue(makeCombatQueue([...party.characters, ...enemyParty.characters]))
    setRoundId(v4())
    setActiveRound(undefined)
    setIsRenderingResult(false)
  }

  const reset = () => {
    onRequestNewParty()
    setIsRunning(false)
    setActiveRound(undefined)
    setSelectedSkill(undefined)
    setSelectedTarget(undefined)
    setSelectedConsumableIndex(undefined)
    setIsRenderingResult(false)
    setQueue({})
  }

  const next = (nextTarget?: tProcessedCharacter | tProcessedParty) => {
    if (!selectedSkill) return
    const roundTarget = nextTarget
      ? makeSkillTarget(selectedSkill.targetType, nextTarget)
      : selectedTarget
    if (!selectedSkill || !roundTarget) return
    const results = getSkillResult(
      activeCharacter,
      resolveSkillTarget(roundTarget).filter((c) => c.health > 0),
      selectedSkill,
    )
    setActiveRound(results)
    setSelectedSkill(undefined)
    setSelectedTarget(undefined)
    setSelectedConsumableIndex(undefined)
    setIsRenderingResult(true)
  }

  const onSkillSelect = (skill: tSkill, consumableIndex?: number) => {
    setSelectedSkill(skill)
    if (consumableIndex !== undefined) {
      setSelectedConsumableIndex(consumableIndex)
    }
    if (skill.targetType !== selectedSkill?.targetType) {
      setSelectedTarget(undefined)
    }
  }

  const onTargetsSelect = (target: tProcessedCharacter | tProcessedParty) => {
    if (!selectedSkill) return
    setSelectedTarget(makeSkillTarget(selectedSkill.targetType, target))
  }

  const completeRound = () => {
    setRoundId(v4())
    setActiveRound(undefined)
    setIsRenderingResult(false)
  }

  const commit = useCallback(() => {
    if (!activeRound) return
    const result = resultCommitter(activeRound)
    setRoundResults((r) => [...r, activeRound])
    setEnemyParty(result.enemyParty)
    updateParty(result.playerParty)
    setQueue(result.queue)

    completeRound()
  }, [activeRound, queue])

  const execEnemyTurn = (skill: tSkill, target: tSkillTarget) => {
    const result = getSkillResult(
      activeCharacter,
      resolveSkillTarget(target),
      skill,
    )
    setActiveRound(result)
  }

  useEffect(() => {
    if (activeCharacter && isRunning) {
      if (activeCharacter.partyId === enemyParty.id) {
        const { skill, target } = getAIAction(
          activeCharacter,
          party,
          enemyParty,
        )
        execEnemyTurn(skill, makeSkillTarget(skill.targetType, target))
      } else {
        setSelectedSkill(activeCharacter.skills[0])
      }
    }
  }, [roundId])

  useEffect(() => {
    if (!isRunning) return
    if (enemyParty.characters.every((c) => c.health <= 0)) {
      setIsRunning(false)
      const rewards = getRolledRewards(
        enemyParty,
        party.characters.reduce((p, c) =>
          p.stats.luck > c.stats.luck ? p : c,
        ),
      )
      updateParty({
        ...rawParty,
        characters: rawParty.characters.map((c) => removeTemporaryStatus(c)),
      })
      open(<CombatVictoryModal rewards={rewards} />, {}, true)
      return
    }
    if (party.characters.every((c) => c.health <= 0)) {
      setIsRunning(false)
      alert('you lose')
      history.push('/JSFTK_combat/')
      return
    }
  }, [party, enemyParty])

  return (
    <CombatContext.Provider
      value={{
        party,
        enemyParty,
        characters,
        queue,
        activeCharacter,
        activeRound,
        selectedSkill,
        selectedTargets: selectedTarget
          ? resolveSkillTarget(selectedTarget)
          : [],
        selectedConsumableIndex,
        roundResults,
        isRunning,
        isRenderingResult,
        onSkillSelect,
        onTargetsSelect,
        onConsumableSelect: setSelectedConsumableIndex,
        start,
        next,
        commit,
        reset,
      }}
    >
      {children}
    </CombatContext.Provider>
  )
}
