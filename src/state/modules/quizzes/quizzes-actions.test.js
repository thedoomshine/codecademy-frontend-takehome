import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import { getQuizzes } from 'data/quizzes'

import {
  SET_ACTIVE_QUESTION,
  SET_ACTIVE_QUIZ_TITLE,
  SET_INDEX,
  QUIZZES_REQUEST,
  QUIZZES_REQUEST_SUCCESS,
  asyncFetchQuizzes,
  setNextQuestion,
  setNextQuiz,
} from './quizzes-actions'

import { mockInitialState } from 'services/test-utils'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('quizzes redux module actions', () => {
  it('creates QUIZZES_REQUEST_SUCCESS when fetching quizzes finishes', async () => {
    const quizzes = await getQuizzes()
    const expectedActions = [
      { type: QUIZZES_REQUEST },
      { type: QUIZZES_REQUEST_SUCCESS, response: [...quizzes] },
    ]

    const store = mockStore({ ...mockInitialState })

    return store.dispatch(asyncFetchQuizzes()).then(() => {
      expect(store.getActions()).toContainEqual(...expectedActions)
    })
  })

  it('creates SET_INDEX, SET_ACTIVE_QUIZ, and SET_ACTIVE_QUESTION when setNextQuiz is fired', async () => {
    const quizzes = await getQuizzes()
    const expectedActions = [
      { type: SET_INDEX, response: { question: 0, quiz: 0 } },
      { type: SET_ACTIVE_QUIZ_TITLE, response: quizzes[0].title },
      { type: SET_ACTIVE_QUESTION, response: quizzes[0].questions[0] },
    ]

    const store = mockStore({
      quizzes: { ...mockInitialState.quizzes, allQuizzes: [...quizzes] },
    })

    store.dispatch(setNextQuiz())
    expect(store.getActions()).toContainEqual(...expectedActions)
  })

  it('creates SET_INDEX and SET_ACTIVE_QUESTION when setNextQuestion is fired', async () => {
    const quizzes = await getQuizzes()
    const expectedActions = [
      { type: SET_INDEX, response: { question: 1 } },
      { type: SET_ACTIVE_QUESTION, response: quizzes[0].questions[1] },
    ]

    const store = mockStore({
      quizzes: {
        ...mockInitialState.quizzes,
        allQuizzes: [...quizzes],
        index: { question: 0, quiz: 0 },
      },
    })

    store.dispatch(setNextQuestion())
    expect(store.getActions()).toContainEqual(...expectedActions)
  })
})
