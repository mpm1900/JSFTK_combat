import { GameStateT } from './game2'
import { tParty } from '../game/Party/type'

export interface StateT {
  party: tParty
  game: GameStateT
}

export interface StateActionT<T = any> {
  type: string
  payload: T
}

export type StateReducerT<TState = any, TAction = any> = (
  state: TState,
  action: StateActionT<TAction>,
) => TState

export type StateCoreT<TState = any, TAction = any> = {
  [key: string]: StateReducerT<TState, TAction> | undefined
}
