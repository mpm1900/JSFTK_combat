import { StateCoreT, StateT, StateActionT } from '../types'
import { makeReducer } from '../util'
import { useSelector } from 'react-redux'
import { useActions } from '../../hooks/useActions'
import { NodeT, generateTree, complete } from '../../types/Tree'
import { Dispatch } from 'redux'
import { StatsPreview } from '../../components/StatsPreview'

export interface GameStateT {
  tree: NodeT
  activeNodeId: string
}

export const RESET = '@action/game/reset'
export const SET_ACTIVE_NODE_ID = '@actions/game/set-active-node-id'
export const SET_NODE_AS_COMPLETED = '@actions/game/set-node-as-completed'

export const actionCreators = {
  reset: (tree?: NodeT): StateActionT => ({
    type: RESET,
    payload: {
      tree,
    },
  }),
  setActiveNodeId: (activeNodeId: string): StateActionT => ({
    type: SET_ACTIVE_NODE_ID,
    payload: {
      activeNodeId,
    },
  }),
  setNodeAsCompleted: (activeNodeId: string): StateActionT => ({
    type: SET_NODE_AS_COMPLETED,
    payload: {
      activeNodeId,
    },
  }),
}

export const actions = {
  reset: (tree?: NodeT) => (dispatch: Dispatch) => {
    dispatch(actionCreators.reset(tree))
  },
  setActiveNodeId: (activeNodeId: string) => (dispatch: Dispatch) => {
    dispatch(actionCreators.setActiveNodeId(activeNodeId))
  },
  setNodeAsCompleted: (activeNodeId: string) => (dispatch: Dispatch) => {
    dispatch(actionCreators.setNodeAsCompleted(activeNodeId))
  },
}

export const core: StateCoreT<GameStateT> = {
  [RESET]: (state, action) => {
    const tree = action.payload.tree || generateTree()
    return {
      tree,
      activeNodeId: tree.id,
    }
  },
  [SET_ACTIVE_NODE_ID]: (state, action) => {
    return {
      ...state,
      activeNodeId: action.payload.activeNodeId,
    }
  },
  [SET_NODE_AS_COMPLETED]: (state, action) => {
    return {
      ...state,
      tree: complete(state.tree, action.payload.activeNodeId),
    }
  },
}

const tree = generateTree()
export const INITIAL_STATE: GameStateT = {
  tree,
  activeNodeId: tree.id,
}

export default makeReducer(core, INITIAL_STATE)
export const useGameState = () => useSelector((state: StateT) => state.game)
export const useGameStateActions = () =>
  useActions(actions) as {
    reset: (tree?: NodeT) => void
    setActiveNodeId: (activeNodeId: string) => void
    setNodeAsCompleted: (activeNodeId: string) => void
  }
