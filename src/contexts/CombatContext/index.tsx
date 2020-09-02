import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react'
import {
  ProcessedPartyT,
  PartyT,
  SkillT,
  ProcessedCharacterT,
  TargetSkillResultT,
  SkillTargetT,
} from '../../types'
import {
  makeParty,
  processParty,
  getSkillResults,
  commitSkillResults,
  processCharacter,
  makeCharacter,
  resolveSkillTarget,
  makeSkillTarget,
} from '../../functions'
import { usePartyContext } from '../PartyContext'
import { getRandom } from '../../util'
import {
  CombatQueueT,
  makeCombatQueue,
  getFirst,
  shiftQueue,
  getSortedIds,
  validateQueue,
} from '../../types/CombatQueue'
import { getAIAction } from '../../functions/AI'
import { v4 } from 'uuid'

export interface CombatContextT {
  party: ProcessedPartyT
  enemyParty: ProcessedPartyT
  activeCharacter: ProcessedCharacterT
  queue: ProcessedCharacterT[]
  selectedSkill: SkillT | undefined
  selectedTargets: ProcessedCharacterT[]
  roundResults: TargetSkillResultT[][]
  activeRound: TargetSkillResultT[] | undefined
  isRunning: boolean
  isDone: boolean
  onSkillSelect: (skill: SkillT) => void
  onTargetsSelect: (target: ProcessedCharacterT | ProcessedPartyT) => void
  start: () => void
  next: () => void
  commit: () => void
}
const defaultValue: CombatContextT = {
  party: processParty(makeParty()),
  enemyParty: processParty(makeParty()),
  activeCharacter: processCharacter(makeCharacter('blacksmith')),
  queue: [],
  selectedSkill: undefined,
  selectedTargets: [],
  roundResults: [],
  activeRound: undefined,
  isRunning: false,
  isDone: false,
  onSkillSelect: (skill: SkillT) => {},
  onTargetsSelect: (target: ProcessedCharacterT | ProcessedPartyT) => {},
  start: () => {},
  next: () => {},
  commit: () => {},
}
export const CombatContext = createContext<CombatContextT>(defaultValue)
export const useCombatContext = () => useContext(CombatContext)

export interface CombatContextProviderPropsT {
  children: JSX.Element
  enemyParty: PartyT
  setEnemyParty: (party: PartyT) => void
}
export const CombatContextProvider = (props: CombatContextProviderPropsT) => {
  const { children, setEnemyParty } = props
  const { party, rawParty, updateParty } = usePartyContext()
  const resultCommitter = useMemo(
    () => commitSkillResults(rawParty, props.enemyParty),
    [rawParty, props.enemyParty],
  )
  const enemyParty = useMemo(() => processParty(props.enemyParty), [
    props.enemyParty,
  ])
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)
  const characters = useMemo(
    () => [...party.characters, ...enemyParty.characters],
    [party, enemyParty],
  )
  const [queue, setQueue] = useState<CombatQueueT>(
    makeCombatQueue([...party.characters, ...enemyParty.characters]),
  )
  const [roundId, setRoundId] = useState<string>(v4())
  const [roundResults, setRoundResults] = useState<TargetSkillResultT[][]>([])
  const [activeRound, setActiveRound] = useState<
    TargetSkillResultT[] | undefined
  >()
  const [selectedTarget, setSelectedTarget] = useState<
    SkillTargetT | undefined
  >()
  const [selectedSkill, setSelectedSkill] = useState<SkillT | undefined>()
  const activeCharacter = useMemo(
    () =>
      characters.find(
        (c) => !c.dead && c.id === getFirst(queue),
      ) as ProcessedCharacterT,
    [queue, characters],
  )

  const start = useCallback(() => setIsRunning(true), [])

  const next = () => {
    if (!selectedSkill || !selectedTarget) return
    const results = getSkillResults(
      selectedSkill,
      activeCharacter,
      resolveSkillTarget(selectedTarget).filter((c) => !c.dead),
    )
    setActiveRound(results)
    setSelectedSkill(undefined)
    setSelectedTarget(undefined)
  }

  const onSkillSelect = (skill: SkillT) => {
    setSelectedSkill(skill)
    if (skill.targetType !== selectedSkill?.targetType) {
      setSelectedTarget(undefined)
    }
  }

  const onTargetsSelect = (target: ProcessedCharacterT | ProcessedPartyT) => {
    if (!selectedSkill) return
    setSelectedTarget(makeSkillTarget(selectedSkill.targetType, target))
  }

  const commit = useCallback(() => {
    if (!activeRound) return
    const parties = resultCommitter(activeRound)
    setEnemyParty(parties.enemyParty)
    updateParty(parties.party)
    setRoundResults((r) => [...r, activeRound])
    setActiveRound(undefined)
    const updatedCharacters = [
      ...parties.party.characters,
      ...parties.enemyParty.characters,
    ].map((c) => processCharacter(c))
    setQueue(
      validateQueue(
        shiftQueue(queue, activeRound[0].source),
        updatedCharacters,
      ),
    )
    setRoundId(v4())
  }, [activeRound, queue])

  const execEnemyTurn = (skill: SkillT, target: SkillTargetT) => {
    const results = getSkillResults(
      skill,
      activeCharacter,
      resolveSkillTarget(target),
    )
    setActiveRound(results)
  }

  useEffect(() => {
    if (activeCharacter) {
      if (activeCharacter.partyId === enemyParty.id) {
        const { skill, target } = getAIAction(
          activeCharacter,
          party,
          enemyParty,
        )

        execEnemyTurn(skill, makeSkillTarget(skill.targetType, target))
      }
    }
  }, [roundId])

  useEffect(() => {
    if (isDone) return
    if (enemyParty.characters.every((c) => c.dead)) {
      alert('you win')
      setIsDone(true)
      return
    }
    if (party.characters.every((c) => c.dead)) {
      setIsDone(true)
      alert('you lose')
      return
    }
  }, [party, enemyParty])

  return (
    <CombatContext.Provider
      value={{
        party,
        enemyParty,
        queue: getSortedIds(queue)
          .map(
            (id) => characters.find((c) => c.id === id) as ProcessedCharacterT,
          )
          .filter((c) => c !== undefined)
          .map((c) => ({
            ...c,
            name: `${c.name} (${queue[c.id]})`,
          })),
        activeCharacter,
        activeRound,
        selectedSkill,
        selectedTargets: selectedTarget
          ? resolveSkillTarget(selectedTarget)
          : [],
        roundResults,
        isDone,
        isRunning,
        onSkillSelect,
        onTargetsSelect,
        start,
        next,
        commit,
      }}
    >
      {children}
    </CombatContext.Provider>
  )
}
