import { StateCoreT, StateT, StateActionT } from '../types'
import { makeReducer } from '../util'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { Dispatch } from 'redux'
import { tShopEncounter, tFloor } from '../../game/Encounter/type'
import { makeFloor } from '../../game/Encounter/util'

export interface GameStateT {
  level: number
  floor: number
  floors: tFloor[]
}

export const RESET = '@action/game/reset'
export const CHOOSE_CURRENT = '@action/game/choose-current'
export const NEXT_LEVEL = '@action/game/next-level'
export const NEXT_FLOOR = '@action/game/next-floor'
export const REMOVE_ITEM = '@action/game/remove-item'

export const actionCreators = {
  reset: (): StateActionT => ({
    type: RESET,
    payload: {},
  }),
  chooseCurrent: (value: number): StateActionT => ({
    type: CHOOSE_CURRENT,
    payload: {
      value,
    },
  }),
  nextLevel: (): StateActionT => ({
    type: NEXT_LEVEL,
    payload: {},
  }),
  nextFloor: (): StateActionT => ({
    type: NEXT_FLOOR,
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
  chooseCurrent: (value: number) => (dispatch: Dispatch) => {
    dispatch(actionCreators.chooseCurrent(value))
  },
  nextLevel: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.nextLevel())
  },
  nextFloor: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.nextFloor())
  },
  removeItem: (choiceId: string, encounterId: string, itemId: string) => (
    dispatch: Dispatch,
  ) => {
    dispatch(actionCreators.removeItem(choiceId, encounterId, itemId))
  },
}

const updateCurrentFloor = (
  state: GameStateT,
  updater: (floor: tFloor) => tFloor,
): GameStateT => {
  return {
    ...state,
    floors: state.floors.map((floor) =>
      floor.depth === state.floor ? updater(floor) : floor,
    ),
  }
}

export const core: StateCoreT<GameStateT> = {
  [RESET]: (state, action) => {
    return {
      ...state,
      level: 0,
      floor: 0,
      floors: [makeFloor(0, 11), makeFloor(1, 11), makeFloor(2, 11)],
    }
  },
  [CHOOSE_CURRENT]: (state, action) => {
    return updateCurrentFloor(state, (floor) => {
      return {
        ...floor,
        encounters: floor.encounters.map((e, i) => {
          if (i === state.level) {
            return {
              ...e,
              chosen: action.payload.value,
            }
          }
          return e
        }),
      }
    })
  },
  [NEXT_LEVEL]: (state, action) => {
    return {
      ...state,
      level: state.level + 1,
    }
  },
  [NEXT_FLOOR]: (state, action) => {
    return {
      ...state,
      level: 0,
      floor: state.floor + 1,
    }
  },
  [REMOVE_ITEM]: (state, action) => {
    return updateCurrentFloor(state, (floor) => {
      return {
        ...floor,
        encounters: floor.encounters.map((choice) => {
          if (choice.id === action.payload.choiceId) {
            const chosen =
              choice.chosen !== undefined
                ? choice.choices[choice.chosen]
                : undefined
            if (
              chosen &&
              chosen.id === action.payload.encounterId &&
              chosen.type === 'shop'
            ) {
              return {
                ...choice,
                choices: choice.choices.map((c) =>
                  c.id === chosen.id
                    ? ({
                        ...c,
                        items: (c as tShopEncounter).items.filter(
                          (i) => i.id !== action.payload.itemId,
                        ),
                      } as tShopEncounter)
                    : c,
                ),
              }
            }
          }
          return choice
        }),
      }
    })
  },
}

export const INITIAL_STATE: GameStateT = {
  level: 0,
  floor: 0,
  floors: [makeFloor(0, 11), makeFloor(1, 11), makeFloor(2, 11)],
}

export default makeReducer(core, INITIAL_STATE)
export const useGameState = () => useSelector((state: StateT) => state.game)
export const useGameStateActions = () =>
  useActions(actions) as {
    reset: () => void
    chooseCurrent: (value: number) => void
    nextLevel: () => void
    nextFloor: () => void
    removeItem: (choiceId: string, encounterId: string, itemId: string) => void
  }
