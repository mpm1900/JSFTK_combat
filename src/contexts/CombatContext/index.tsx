import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useEffect,
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
  rawEnemyParty: PartyT
  enemyParty: ProcessedPartyT
  setEnemyParty: (party: PartyT) => void
}
export const CombatContextProvider = (props: CombatContextProviderPropsT) => {
  const { children, enemyParty, rawEnemyParty, setEnemyParty } = props
  const { party, rawParty, updateParty } = usePartyContext()
  const resultCommitter = useMemo(
    () => commitSkillResults(rawParty, rawEnemyParty),
    [rawParty, rawEnemyParty],
  )
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)
  const characters = useMemo(
    () =>
      [...party.characters, ...enemyParty.characters].filter((c) => !c.dead),
    [party, enemyParty],
  )
  const [queue, setQueue] = useState<string[]>(
    characters
      .sort((a, b) => b.stats.agility - a.stats.agility)
      .map((c) => c.id),
  )
  const [roundResults, setRoundResults] = useState<TargetSkillResultT[][]>([])
  const [activeRound, setActiveRound] = useState<
    TargetSkillResultT[] | undefined
  >()
  const [selectedTarget, setSelectedTarget] = useState<
    SkillTargetT | undefined
  >()
  const [selectedSkill, setSelectedSkill] = useState<SkillT | undefined>()
  const activeCharacter = useMemo(
    () => characters.find((c) => c.id === queue[0]) as ProcessedCharacterT,
    [queue, characters],
  )

  const getTargetsOptions = (
    sourcePartyId: string,
    skill: SkillT,
  ): ProcessedCharacterT[] | ProcessedPartyT[] => {
    const sourceParty = party.id === sourcePartyId ? party : enemyParty
    const targetParty = party.id === sourcePartyId ? enemyParty : party
    switch (skill.targetType) {
      case 'single':
        return targetParty.characters.filter((c) => !c.dead)
      case 'ally':
        return sourceParty.characters.filter((c) => !c.dead)
      case 'group':
        return [targetParty]
      case 'party':
        return [sourceParty]
      case 'self':
        return [activeCharacter]
      default:
        return []
    }
  }

  const start = () => setIsRunning(true)

  const next = () => {
    const roundTarget = selectedTarget
    if (!selectedSkill || !roundTarget) return
    const source = activeCharacter
    const results = getSkillResults(
      selectedSkill,
      source,
      resolveSkillTarget(roundTarget),
    )
    setActiveRound(results)
  }

  const onSkillSelect = (skill: SkillT) => {
    setSelectedSkill(skill)
    setSelectedTarget(undefined)
  }

  const onTargetsSelect = (target: ProcessedCharacterT | ProcessedPartyT) => {
    if (!selectedSkill) return
    setSelectedTarget(makeSkillTarget(selectedSkill.targetType, target))
  }

  const commit = () => {
    if (!activeRound) return
    const parties = resultCommitter(activeRound)
    setEnemyParty(parties.enemyParty)
    updateParty(parties.party)
    setSelectedSkill(undefined)
    setSelectedTarget(undefined)
    setRoundResults((r) => [...r, activeRound])
    setActiveRound(undefined)
    setQueue((q) => {
      const [active, ...rest] = q
      return [...rest, active].filter(
        (id) => characters.find((c) => c.id === id) !== undefined,
      )
    })
  }

  const execEnemyTurn = (skill: SkillT, target: SkillTargetT) => {
    const source = activeCharacter
    const results = getSkillResults(skill, source, resolveSkillTarget(target))
    setActiveRound(results)
  }

  useEffect(() => {
    if (!activeCharacter) {
      if (queue.length > 0) {
        setQueue((q) => {
          const [active, ...rest] = q
          return [...rest, active].filter(
            (id) => characters.find((c) => c.id === id) !== undefined,
          )
        })
      }
    } else {
      if (activeCharacter.partyId === enemyParty.id) {
        const skill = getRandom(activeCharacter.skills)
        const target = getRandom<ProcessedPartyT | ProcessedCharacterT>(
          getTargetsOptions(activeCharacter.partyId, skill),
        )

        execEnemyTurn(skill, makeSkillTarget(skill.targetType, target))
      }
    }
  }, [(activeCharacter || {}).id])

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
        queue: queue
          .map(
            (id) => characters.find((c) => c.id === id) as ProcessedCharacterT,
          )
          .filter((c) => c !== undefined),
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
