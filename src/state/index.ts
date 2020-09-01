import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import party from './party'

export const makeStore = () =>
  createStore(combineReducers({ party }), compose(applyMiddleware(thunk)))
