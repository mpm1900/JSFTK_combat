import { StateCoreT, StateReducerT } from './types'

export const makeReducer = (
  core: StateCoreT,
  initialState: any,
): StateReducerT => {
  return (state = initialState, action) => {
    const coreFn = core[action.type]
    if (coreFn) return coreFn(state, action)
    return state
  }
}
