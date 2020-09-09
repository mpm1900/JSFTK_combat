import { StateCoreT, StateT, StateActionT } from '../types'
import { makeReducer } from '../util'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { Dispatch } from 'redux'
import { tEncounterChoice, tShopEncounter } from '../../game/Encounter/type'
import { makeEncounterList } from '../../game/Encounter/util'

export interface GameStateT {
  encounters: tEncounterChoice[]
  level: number
}

export const RESET = '@action/game/reset'
export const CHOOSE_CURRENT = '@action/game/choose-current'
export const NEXT_LEVEL = '@action/game/next-level'
export const REMOVE_ITEM = '@action/game/remove-item'

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
  removeItem: (
    choiceId: string,
    encounterId: string,
    itemId: string,
  ): StateActionT => ({
    type: REMOVE_ITEM,
    payload: {
      choiceId,
      encounterId,
      itemId,
    },
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
  removeItem: (choiceId: string, encounterId: string, itemId: string) => (
    dispatch: Dispatch,
  ) => {
    dispatch(actionCreators.removeItem(choiceId, encounterId, itemId))
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
  [REMOVE_ITEM]: (state, action) => {
    return {
      ...state,
      encounters: state.encounters.map((choice) => {
        if (choice.id === action.payload.choiceId) {
          if (
            choice.left.id === action.payload.encounterId &&
            choice.left.type === 'shop'
          ) {
            return {
              ...choice,
              left: {
                ...choice.left,
                items: (choice.left as tShopEncounter).items.filter(
                  (i) => i.id !== action.payload.itemId,
                ),
              } as tShopEncounter,
            }
          }
          if (
            choice.right.id === action.payload.encounterId &&
            choice.right.type === 'shop'
          ) {
            return {
              ...choice,
              right: {
                ...choice.right,
                items: (choice.right as tShopEncounter).items.filter(
                  (i) => i.id !== action.payload.itemId,
                ),
              } as tShopEncounter,
            }
          }
          return choice
        } else {
          return choice
        }
      }),
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
    removeItem: (choiceId: string, encounterId: string, itemId: string) => void
  }
