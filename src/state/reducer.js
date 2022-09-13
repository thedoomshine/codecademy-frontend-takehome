import { combineReducers } from 'redux'

export const createReducer = (asyncReducers) => {
  return combineReducers({
    ...asyncReducers,
  })
}
