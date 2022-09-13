import {
  mockActiveState,
  mockLoadedState,
  mockInitialState,
} from 'services/test-utils'

import reducer from './quizzes-reducer'

import {
  RESET_QUIZZES,
  SET_ACTIVE_QUESTION,
  SET_ACTIVE_QUIZ_TITLE,
  SET_INDEX,
  SET_SELECTED_ANSWER,
  QUIZZES_REQUEST,
  QUIZZES_REQUEST_SUCCESS,
  QUIZZES_REQUEST_FAILURE,
} from './quizzes-actions'

describe('quizzes redux module reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({ ...mockInitialState.quizzes }, {})).toEqual({
      ...mockInitialState.quizzes,
    })
  })

  it('should reset quizzes state', () => {
    expect(
      reducer(
        {
          ...mockActiveState.quizzes,
        },
        {
          type: RESET_QUIZZES,
        },
      ),
    ).toEqual({
      ...mockLoadedState.quizzes,
    })
  })
})

it('should set an active question', () => {
  expect(
    reducer(
      {
        ...mockLoadedState.quizzes,
      },
      {
        type: SET_ACTIVE_QUESTION,
        response: mockLoadedState.quizzes.allQuizzes[1].questions[1],
      },
    ),
  ).toEqual({
    ...mockLoadedState.quizzes,
    activeQuestion: {
      ...mockActiveState.quizzes.activeQuestion,
      selected: '',
    },
  })
})

it('should set the active quiz title', () => {
  expect(
    reducer(
      {
        activeQuizTitle: mockLoadedState.quizzes.activeQuizTitle,
      },
      {
        type: SET_ACTIVE_QUIZ_TITLE,
        response: mockActiveState.quizzes.activeQuizTitle,
      },
    ),
  ).toEqual({
    activeQuizTitle: mockActiveState.quizzes.activeQuizTitle,
  })
})

it('should set the indexes for quiz and question', () => {
  expect(
    reducer(
      {
        index: mockLoadedState.quizzes.index,
      },
      {
        type: SET_INDEX,
        response: mockActiveState.quizzes.index,
      },
    ),
  ).toEqual({
    index: mockActiveState.quizzes.index,
  })
})

it('should set the indexes for quiz and question and increase correctAnswers', () => {
  expect(
    reducer(
      {
        index: { ...mockLoadedState.quizzes.index },
        activeQuestion: { ...mockLoadedState.quizzes.activeQuestion },
        correctAnswers: [...mockLoadedState.quizzes.correctAnswers],
      },
      {
        type: SET_SELECTED_ANSWER,
        response: mockLoadedState.quizzes.activeQuestion.correctAnswer,
      },
    ),
  ).toEqual({
    index: { ...mockLoadedState.quizzes.index },
    activeQuestion: {
      ...mockLoadedState.quizzes.activeQuestion,
      selected: mockLoadedState.quizzes.activeQuestion.correctAnswer,
    },
    correctAnswers: [1, 0],
  })

  it('should set the indexes for quiz and question and not increase correctAnswers', () => {
    expect(
      reducer(
        {
          index: { ...mockLoadedState.quizzes.index },
          activeQuestion: { ...mockLoadedState.quizzes.activeQuestion },
          correctAnswers: [...mockLoadedState.quizzes.correctAnswers],
        },
        {
          type: SET_SELECTED_ANSWER,
          response: mockLoadedState.quizzes.activeQuestion.incorrectAnswers[0],
        },
      ),
    ).toEqual({
      index: { ...mockLoadedState.quizzes.index },
      activeQuestion: {
        ...mockLoadedState.quizzes.activeQuestion,
        selected: mockLoadedState.quizzes.activeQuestion.incorrectAnswers[0],
      },
      correctAnswers: [0, 0],
    })
  })

  it('should set the loading state when quizzes are requested', () => {
    expect(
      reducer(
        {
          ...mockInitialState.quizzes,
        },
        {
          type: QUIZZES_REQUEST,
        },
      ),
    ).toEqual({
      ...mockInitialState.quizzes,
      loading: true,
    })
  })

  it('should set the loaded state when the quizzes request succeeds', () => {
    expect(
      reducer(
        {
          ...mockInitialState.quizzes,
        },
        {
          type: QUIZZES_REQUEST_SUCCESS,
          response: [...mockLoadedState.quizzes.allQuizzes],
        },
      ),
    ).toEqual({
      ...mockLoadedState.quizzes,
      activeQuestion: { ...mockInitialState.quizzes.activeQuestion },
      activeQuizTitle: mockInitialState.quizzes.activeQuizTitle,
      index: mockInitialState.quizzes.index,
    })
  })

  it('should set an error when the quizzes request fails', () => {
    const error = 'Something went wrong'
    expect(
      reducer(
        {
          ...mockInitialState.quizzes,
        },
        {
          type: QUIZZES_REQUEST_FAILURE,
          error,
        },
      ),
    ).toEqual({
      ...mockInitialState.quizzes,
      loaded: true,
      error,
    })
  })
})
