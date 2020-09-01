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
} from '../../types'
import {
  makeParty,
  processParty,
  getSkillResults,
  commitSkillResults,
  processCharacter,
  makeCharacter,
} from '../../functions'
import { usePartyContext } from '../PartyContext'
import { getRandom } from '../../util'

export interface CombatContextT {
  party: ProcessedPartyT
  enemyParty: ProcessedPartyT
  activeCharacter: ProcessedCharacterT
  queue: ProcessedCharacterT[]
  selectedSkill: SkillT | undefined
  targets: ProcessedCharacterT[]
  selectedTarget: ProcessedCharacterT | undefined
  roundResults: TargetSkillResultT[][]
  activeRound: TargetSkillResultT[] | undefined
  isDone: boolean
  onSkillSelect: (skill: SkillT) => void
  onTargetsSelect: (target: ProcessedCharacterT) => void
  next: () => void
  commit: () => void
}
const defaultValue: CombatContextT = {
  party: processParty(makeParty()),
  enemyParty: processParty(makeParty()),
  activeCharacter: processCharacter(makeCharacter('blacksmith')),
  queue: [],
  selectedSkill: undefined,
  targets: [],
  selectedTarget: undefined,
  roundResults: [],
  activeRound: undefined,
  isDone: false,
  onSkillSelect: (skill: SkillT) => {},
  onTargetsSelect: (target: ProcessedCharacterT) => {},
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
  const [isDone, setIsDone] = useState<boolean>(false)
  const characters = useMemo(
    () =>
      [...party.characters, ...enemyParty.characters].filter((c) => !c.dead),
    [party, enemyParty],
  )
  const [queue, setQueue] = useState<string[]>(
    characters
      .sort((a, b) => a.stats.agility - b.stats.agility)
      .map((c) => c.id),
  )
  const [roundResults, setRoundResults] = useState<TargetSkillResultT[][]>([])
  const [activeRound, setActiveRound] = useState<
    TargetSkillResultT[] | undefined
  >()
  const [targets, setTargets] = useState<ProcessedCharacterT[]>([])
  const [selectedTarget, setSelectedTarget] = useState<
    ProcessedCharacterT | undefined
  >()
  const [selectedSkill, setSelectedSkill] = useState<SkillT | undefined>()
  const activeCharacter = useMemo(
    () => characters.find((c) => c.id === queue[0]) as ProcessedCharacterT,
    [queue, characters],
  )

  const getTargetsOptions = (
    partyId: string,
    skill: SkillT,
  ): ProcessedCharacterT[] => {
    const sourceParty = party.id === partyId ? party : enemyParty
    const targetParty = party.id === partyId ? enemyParty : party
    switch (skill.target) {
      case 'single':
        return targetParty.characters.filter((c) => !c.dead)
      case 'ally':
        return sourceParty.characters.filter((c) => !c.dead)
      case 'group':
        return []
      case 'party':
        return []
      case 'self':
        return []
      default:
        return []
    }
  }

  const next = (target?: ProcessedCharacterT) => {
    const roundTarget = target || selectedTarget
    if (!selectedSkill || !roundTarget) return
    const source = activeCharacter
    const results = getSkillResults(selectedSkill, source, [roundTarget])
    setActiveRound(results)
  }

  const onSkillSelect = (skill: SkillT) => {
    setSelectedSkill(skill)
    setTargets(getTargetsOptions(party.id, skill))
  }

  const onTargetsSelect = (target: ProcessedCharacterT, push?: boolean) => {
    if (!selectedSkill) return null
    setSelectedTarget(target)
    if (push) next(target)
  }

  const commit = () => {
    if (!activeRound) return
    const parties = resultCommitter(activeRound)
    setEnemyParty(parties.enemyParty)
    updateParty(parties.party)
    setSelectedSkill(undefined)
    setSelectedTarget(undefined)
    setTargets([])
    setRoundResults((r) => [...r, activeRound])
    setActiveRound(undefined)
    setQueue((q) => {
      const [active, ...rest] = q
      return [...rest, active].filter(
        (id) => characters.find((c) => c.id === id) !== undefined,
      )
    })
  }

  const execEnemyTurn = (skill: SkillT, targets: ProcessedCharacterT[]) => {
    const source = activeCharacter
    const results = getSkillResults(skill, source, targets)
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
        const targets = [
          getRandom(getTargetsOptions(activeCharacter.partyId, skill)),
        ]
        execEnemyTurn(skill, targets)
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
        targets,
        selectedTarget,
        roundResults,
        isDone,
        onSkillSelect,
        onTargetsSelect,
        next,
        commit,
      }}
    >
      {children}
    </CombatContext.Provider>
  )
}
