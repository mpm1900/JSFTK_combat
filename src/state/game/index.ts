import { StateCoreT, StateT, StateActionT } from '../types'
import { makeReducer } from '../util'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { Dispatch } from 'redux'
import { tEncounterChoice } from '../../game/Encounter/type'
import { makeEncounterList } from '../../game/Encounter/util'

export interface GameStateT {
  encounters: tEncounterChoice[]
  level: number
}

export const RESET = '@action/game/reset'
export const CHOOSE_CURRENT = '@action/game/choose-current'
export const NEXT_LEVEL = '@action/game/next-level'

export const actionCreators = {
  reset: (): StateActionT => ({
    type: RESET,
    payload: {},
  }),
  chooseCurrent: (value: 'left' | 'right'): StateActionT => ({
    type: CHOOSE_CURRENT,
    payload: {
      value,
    },
  }),
  nextLevel: (): StateActionT => ({
    type: NEXT_LEVEL,
    payload: {},
  }),
}

export const actions = {
  reset: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.reset())
  },
  chooseCurrent: (value: 'left' | 'right') => (dispatch: Dispatch) => {
    dispatch(actionCreators.chooseCurrent(value))
  },
  nextLevel: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.nextLevel())
  },
}

export const core: StateCoreT<GameStateT> = {
  [RESET]: (state, action) => {
    return {
      ...state,
      level: 0,
      encounters: makeEncounterList(10),
    }
  },
  [CHOOSE_CURRENT]: (state, action) => {
    return {
      ...state,
      encounters: state.encounters.map((e, i) => {
        if (i === state.level) {
          return {
            ...e,
            value: action.payload.value,
          }
        }
        return e
      }),
    }
  },
  [NEXT_LEVEL]: (state, action) => {
    return {
      ...state,
      level: state.level + 1,
    }
  },
}

export const INITIAL_STATE: GameStateT = {
  encounters: makeEncounterList(10),
  level: 0,
}

export default makeReducer(core, INITIAL_STATE)
export const useGameState = () => useSelector((state: StateT) => state.game)
export const useGameStateActions = () =>
  useActions(actions) as {
    reset: () => void
    chooseCurrent: (value: 'left' | 'right') => void
    nextLevel: () => void
  }
