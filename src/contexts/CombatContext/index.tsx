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
  removeTemporaryStatus,
  getRolledRewards,
  consolidateRewards,
  commitRewards,
} from '../../functions'
import { usePartyContext } from '../PartyContext'
import {
  CombatQueueT,
  makeCombatQueue,
  getFirst,
  shiftQueue,
  validateQueue,
} from '../../types/CombatQueue'
import { getAIAction } from '../../functions/AI'
import { v4 } from 'uuid'
import { useHistory } from 'react-router'
import { useModalContext } from '../ModalContext'
import { Button } from '../../elements/button'
import { FlexContainer } from '../../elements/flex'

export interface CombatContextT {
  party: ProcessedPartyT
  enemyParty: ProcessedPartyT
  activeCharacter: ProcessedCharacterT
  characters: ProcessedCharacterT[]
  queue: CombatQueueT
  selectedSkill: SkillT | undefined
  selectedTargets: ProcessedCharacterT[]
  selectedConsumableIndex: number | undefined
  roundResults: TargetSkillResultT[][]
  activeRound: TargetSkillResultT[] | undefined
  isRunning: boolean
  isDone: boolean
  isRenderingResult: boolean
  onSkillSelect: (skill: SkillT, consumableIndex?: number) => void
  onTargetsSelect: (target: ProcessedCharacterT | ProcessedPartyT) => void
  onConsumableSelect: (consumableIndex: number | undefined) => void
  start: () => void
  next: (nextTarget?: ProcessedCharacterT | ProcessedPartyT) => void
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
  isDone: false,
  isRenderingResult: false,
  onSkillSelect: (skill: SkillT) => {},
  onTargetsSelect: (target: ProcessedCharacterT | ProcessedPartyT) => {},
  onConsumableSelect: (consumableIndex) => {},
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
  onRequestNewParty: () => void
}
export const CombatContextProvider = (props: CombatContextProviderPropsT) => {
  const { children, setEnemyParty } = props
  const { party, rawParty, updateParty } = usePartyContext()
  const { open, close } = useModalContext()
  const history = useHistory()
  const resultCommitter = useMemo(
    () => commitSkillResults(rawParty, props.enemyParty),
    [rawParty, props.enemyParty],
  )
  const enemyParty = useMemo(() => processParty(props.enemyParty), [
    props.enemyParty,
  ])
  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isDone, setIsDone] = useState<boolean>(false)
  const [isRenderingResult, setIsRenderingResult] = useState<boolean>(false)
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
  const [selectedConsumableIndex, setSelectedConsumableIndex] = useState<
    number | undefined
  >()
  const activeCharacter = useMemo(
    () =>
      characters.find(
        (c) => !c.dead && c.id === getFirst(queue),
      ) as ProcessedCharacterT,
    [queue, characters],
  )

  const start = useCallback(() => {
    setIsDone(false)
    setIsRunning(true)
  }, [activeCharacter])

  // temp code
  useEffect(() => {
    if (isRunning) {
      setQueue(makeCombatQueue([...party.characters, ...enemyParty.characters]))
    }
  }, [isRunning])

  const next = (nextTarget?: ProcessedCharacterT | ProcessedPartyT) => {
    if (!selectedSkill) return
    const roundTarget = nextTarget
      ? makeSkillTarget(selectedSkill.targetType, nextTarget)
      : selectedTarget
    if (!selectedSkill || !roundTarget) return
    const results = getSkillResults(
      selectedSkill,
      activeCharacter,
      resolveSkillTarget(roundTarget).filter((c) => !c.dead),
      selectedConsumableIndex,
    )
    setActiveRound(results)
    setSelectedSkill(undefined)
    setSelectedTarget(undefined)
    setSelectedConsumableIndex(undefined)
    setIsRenderingResult(true)
  }

  const onSkillSelect = (skill: SkillT, consumableIndex?: number) => {
    setSelectedSkill(skill)
    if (consumableIndex !== undefined) {
      setSelectedConsumableIndex(consumableIndex)
    }
    if (skill.targetType !== selectedSkill?.targetType) {
      setSelectedTarget(undefined)
    }
  }

  const onTargetsSelect = (target: ProcessedCharacterT | ProcessedPartyT) => {
    if (!selectedSkill) return
    setSelectedTarget(makeSkillTarget(selectedSkill.targetType, target))
  }

  const completeRound = (
    source: ProcessedCharacterT,
    updatedCharacters: ProcessedCharacterT[],
  ) => {
    setQueue(
      validateQueue(
        shiftQueue(queue, source, updatedCharacters),
        updatedCharacters,
      ),
    )
    setRoundId(v4())
    setActiveRound(undefined)
    setIsRenderingResult(false)
  }

  const commit = useCallback(() => {
    if (!activeRound || activeRound.length === 0) return
    const parties = resultCommitter(activeRound)
    setRoundResults((r) => [...r, activeRound])
    setEnemyParty(parties.enemyParty)
    updateParty(parties.party)
    const updatedCharacters = [
      ...parties.party.characters,
      ...parties.enemyParty.characters,
    ].map((c) => processCharacter(c))
    completeRound(activeRound[0].source, updatedCharacters)
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
      } else {
        setSelectedSkill(activeCharacter.skills[0])
      }
    }
  }, [roundId])

  useEffect(() => {
    if (isDone) return
    if (enemyParty.characters.every((c) => c.dead)) {
      console.log('VICTORY')
      setIsDone(true)
      const rewards = consolidateRewards(
        getRolledRewards(
          enemyParty,
          party.characters.reduce((p, c) =>
            p.stats.luck > c.stats.luck ? p : c,
          ),
        ),
      )
      updateParty(
        commitRewards(
          {
            ...rawParty,
            characters: rawParty.characters.map((c) =>
              removeTemporaryStatus(c),
            ),
          },
          rewards,
        ),
      )
      console.log(rewards)
      open(
        <div style={{ textAlign: 'center' }}>
          <h1>You Win!</h1>
          <FlexContainer $direction='column' style={{ color: 'white' }}>
            <pre>{JSON.stringify(rewards, null, 2)}</pre>
          </FlexContainer>
          <Button
            onClick={() => {
              close()
              history.push('/JSFTK_combat/party')
            }}
          >
            Close
          </Button>
        </div>,
        {},
        true,
      )
      setIsDone(true)
      return
    }
    if (party.characters.every((c) => c.dead)) {
      alert('you lose')
      setIsDone(true)
      history.push('/JSFTK_combat/')
      return
    }
  }, [party, enemyParty])

  useEffect(() => {
    if (activeCharacter && activeCharacter.skills[0]) {
      setSelectedSkill(activeCharacter.skills[0])
    }
  }, [activeCharacter])

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
        isDone,
        isRunning,
        isRenderingResult,
        onSkillSelect,
        onTargetsSelect,
        onConsumableSelect: setSelectedConsumableIndex,
        start,
        next,
        commit,
      }}
    >
      {children}
    </CombatContext.Provider>
  )
}
