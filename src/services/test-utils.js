import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { initialState as quizzes } from 'state/modules/quizzes'
import { reducer } from 'state/store'

export const mockInitialState = {
  quizzes: { ...quizzes },
}

export const mockLoadedState = {
  quizzes: {
    allQuizzes: [
      {
        title: 'Basics of Testing I',
        questions: [
          {
            text: 'Which answer is correct?',
            correctAnswer: 'Correct Answer',
            incorrectAnswers: [
              'Incorrect Answer',
              'Super Incorrect Answer',
              'Almost Correct Answer',
            ],
          },
          {
            text: 'Which answer is incorrect?',
            correctAnswer: 'Incorrect Answer',
            incorrectAnswers: [
              'Correct Answer',
              'Super Incorrect Answer',
              'Almost Correct Answer',
            ],
          },
        ],
      },
      {
        title: 'Basics of Testing II',
        questions: [
          {
            text: 'Which answer is not incorrect?',
            correctAnswer: 'Correct Answer',
            incorrectAnswers: [
              'Incorrect Answer',
              'Super Incorrect Answer',
              'Almost Correct Answer',
            ],
          },
          {
            text: 'Which answer isnt not incorrect?',
            correctAnswer: 'Incorrect Answer',
            incorrectAnswers: [
              'Correct Answer',
              'Super Incorrect Answer',
              'Almost Correct Answer',
            ],
          },
        ],
      },
    ],
    activeQuestion: {
      answers: [
        'Incorrect Answer',
        'Super Incorrect Answer',
        'Almost Correct Answer',
        'Correct Answer',
      ],
      correctAnswer: 'Correct Answer',
      incorrectAnswers: [
        'Incorrect Answer',
        'Super Incorrect Answer',
        'Almost Correct Answer',
      ],
      selected: '',
      text: 'Which answer is correct?',
    },
    activeQuizTitle: 'Basics of Testing I',
    correctAnswers: [0, 0],
    error: '',
    index: { quiz: 0, question: 0 },
    loading: false,
    loaded: true,
    page: 1,
    total: 2,
  },
}

export const mockActiveState = {
  quizzes: {
    ...mockLoadedState.quizzes,
    activeQuestion: {
      answers: [
        'Correct Answer',
        'Super Incorrect Answer',
        'Almost Correct Answer',
        'Incorrect Answer',
      ],
      correctAnswer: 'Incorrect Answer',
      incorrectAnswers: [
        'Correct Answer',
        'Super Incorrect Answer',
        'Almost Correct Answer',
      ],
      selected: 'Incorrect Answer',
      text: 'Which answer isnt not incorrect?',
    },
    activeQuizTitle: 'Basics of Testing II',
    correctAnswers: [2, 1],
    error: '',
    index: { quiz: 1, question: 1 },
    loading: false,
    loaded: true,
    page: 1,
    total: 2,
  },
}

function render(
  ui,
  {
    initialState = mockLoadedState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
