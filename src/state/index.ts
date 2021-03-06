import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import party from './party'
import game from './game2'

export const makeStore = () =>
  createStore(combineReducers({ party, game }), compose(applyMiddleware(thunk)))
