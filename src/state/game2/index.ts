import { StateCoreT, StateT, StateActionT } from '../types'
import { makeReducer } from '../util'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { Dispatch } from 'redux'
import {
  tShopEncounter,
  tFloor2,
  tRewardEncounter,
} from '../../game/Encounter/type'
import { makeFloor2 } from '../../game/Encounter/util'
import { HexT } from '../../grid/types'
import { getAdjacent, MIN_HEX } from '../../grid/util'
import { FLOOR_SIZE } from '../../game/Encounter/floors'
import { FLOOR_1_ID } from '../../game/Encounter/floors/level1/floor-1'
import { FLOOR_2A_ID } from '../../game/Encounter/floors/level2/floor-2a'
import { FLOOR_3A_ID } from '../../game/Encounter/floors/floor-3'
import { FLOOR_2B_ID } from '../../game/Encounter/floors/level2/floor-2b'

export interface GameStateT {
  hex: HexT | undefined
  floorId: string
  floors: tFloor2[]
  loading: boolean
}

export const RESET = '@action/game/reset'
export const SET_LOADING = '@action/game/set-loading'
export const CHOOSE_NEXT = '@action/game/CHOOSE_NEXT'
export const COMPLETE_CURRENT = '@action/game/complete-current'
export const OPEN_CURRENT = '@action/game/open-current'
export const NEXT_FLOOR = '@action/game/next-floor'
export const REMOVE_ITEM = '@action/game/remove-item'

export const actionCreators = {
  reset: (): StateActionT => ({
    type: RESET,
    payload: {},
  }),
  setLoading: (loading: boolean): StateActionT => ({
    type: SET_LOADING,
    payload: {
      loading,
    },
  }),
  chooseNext: (hex: HexT): StateActionT => ({
    type: CHOOSE_NEXT,
    payload: {
      hex,
    },
  }),
  nextFloor: (floorId: string): StateActionT => ({
    type: NEXT_FLOOR,
    payload: {
      floorId,
    },
  }),
  removeItem: (itemId: string): StateActionT => ({
    type: REMOVE_ITEM,
    payload: {
      itemId,
    },
  }),
  completeCurrent: (): StateActionT => ({
    type: COMPLETE_CURRENT,
    payload: {},
  }),
  openCurrent: (): StateActionT => ({
    type: OPEN_CURRENT,
    payload: {},
  }),
}

export const actions = {
  reset: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.setLoading(true))
    setTimeout(() => {
      dispatch(actionCreators.reset())
      dispatch(actionCreators.setLoading(false))
    }, 200)
  },
  chooseNext: (hex: HexT) => (dispatch: Dispatch) => {
    dispatch(actionCreators.chooseNext(hex))
  },
  nextFloor: (floorId: string) => (dispatch: Dispatch) => {
    dispatch(actionCreators.nextFloor(floorId))
  },
  removeItem: (itemId: string) => (dispatch: Dispatch) => {
    dispatch(actionCreators.removeItem(itemId))
  },
  completeCurrent: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.completeCurrent())
  },
  openCurrent: () => (dispatch: Dispatch) => {
    dispatch(actionCreators.openCurrent())
  },
}

const updateCurrentFloor = (
  state: GameStateT,
  updater: (floor: tFloor2) => tFloor2,
): GameStateT => {
  return {
    ...state,
    floors: state.floors.map((floor) =>
      floor.id === state.floorId ? updater(floor) : floor,
    ),
  }
}

export const core: StateCoreT<GameStateT> = {
  [RESET]: (state, action) => {
    return {
      ...state,
      hex: undefined,
      floorId: FLOOR_1_ID,
      floors: [
        makeFloor2(FLOOR_1_ID, 0, FLOOR_SIZE),
        makeFloor2(FLOOR_2A_ID, 1, FLOOR_SIZE),
        makeFloor2(FLOOR_2B_ID, 1, FLOOR_SIZE),
        makeFloor2(FLOOR_3A_ID, 2, FLOOR_SIZE),
      ],
    }
  },
  [SET_LOADING]: (state, action) => {
    return {
      ...state,
      loading: action.payload.loading,
    }
  },
  [CHOOSE_NEXT]: (state, action) => {
    const hex: HexT = action.payload.hex
    const adjacentHexes = getAdjacent(hex)
    return {
      ...state,
      ...updateCurrentFloor(state, (floor) => {
        let es = { ...floor.encounters }
        adjacentHexes.forEach((hex) => {
          const e = ((es[hex.q] || [])[hex.r] || [])[hex.s]
          if (e) {
            es[hex.q][hex.r][hex.s] = {
              ...e,
              seen: true,
            }
          }
        })
        return {
          ...floor,
          encounters: es,
        }
      }),
      hex,
    }
  },
  [NEXT_FLOOR]: (state, action) => {
    return {
      ...state,
      floorId: action.payload.floorId,
      hex: MIN_HEX(FLOOR_SIZE),
    }
  },
  [REMOVE_ITEM]: (state, action) => {
    return updateCurrentFloor(state, (floor) => {
      const encounters = floor.encounters
      if (!state.hex) return floor
      encounters[state.hex.q][state.hex.r][state.hex.s] = {
        ...encounters[state.hex.q][state.hex.r][state.hex.s],
        items: (encounters[state.hex.q][state.hex.r][
          state.hex.s
        ] as tShopEncounter).items.filter(
          (i) => i.id !== action.payload.itemId,
        ),
      } as tShopEncounter
      return {
        ...floor,
        encounters,
      }
    })
  },
  [COMPLETE_CURRENT]: (state, action) => {
    return updateCurrentFloor(state, (floor) => {
      const encounters = floor.encounters
      if (!state.hex) return floor
      let encounter = encounters[state.hex.q][state.hex.r][state.hex.s]
      if (encounter) {
        encounter = {
          ...encounter,
          completed: true,
        }
        encounters[state.hex.q][state.hex.r][state.hex.s] = encounter
      }
      return {
        ...floor,
        encounters,
      }
    })
  },
  [OPEN_CURRENT]: (state, action) => {
    return updateCurrentFloor(state, (floor) => {
      const encounters = floor.encounters
      if (!state.hex) return floor
      let encounter = encounters[state.hex.q][state.hex.r][state.hex.s]
      if (encounter) {
        encounter = {
          ...encounter,
          isOpened: true,
        } as tRewardEncounter
        encounters[state.hex.q][state.hex.r][state.hex.s] = encounter
      }
      return {
        ...floor,
        encounters,
      }
    })
  },
}

export const INITIAL_STATE: GameStateT = {
  floorId: FLOOR_1_ID,
  hex: MIN_HEX(FLOOR_SIZE),
  floors: [
    makeFloor2(FLOOR_1_ID, 0, FLOOR_SIZE),
    makeFloor2(FLOOR_2A_ID, 1, FLOOR_SIZE),
    makeFloor2(FLOOR_2B_ID, 1, FLOOR_SIZE),
    makeFloor2(FLOOR_3A_ID, 2, FLOOR_SIZE),
  ],
  loading: false,
}

export default makeReducer(core, INITIAL_STATE)
export const useGameState = (): GameStateT =>
  useSelector((state: StateT) => state.game)
export const useGameStateActions = () =>
  useActions(actions) as {
    reset: () => void
    chooseNext: (hex: HexT) => void
    nextFloor: (floorId: string) => void
    removeItem: (itemId: string) => void
    completeCurrent: () => void
    openCurrent: () => void
  }
