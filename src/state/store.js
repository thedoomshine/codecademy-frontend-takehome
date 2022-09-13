import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { loggerMiddleware } from 'state/middleware'
import { createReducer } from 'state/reducer'

import { quizzes } from 'state/modules/quizzes'

const middleware = [loggerMiddleware, thunkMiddleware]
const asyncReducers = [{ quizzes }]

export const reducer = createReducer(...asyncReducers)

export const store = createStore(
  reducer,
  compose(applyMiddleware(...middleware)),
)
