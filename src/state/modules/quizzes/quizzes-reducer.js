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

export const initialState = {
  activeQuestion: {},
  activeQuizTitle: '',
  allQuizzes: [],
  correctAnswers: [],
  error: '',
  index: { quiz: -1, question: -1 },
  loading: false,
  loaded: false,
  page: 0,
  total: 2,
}

const formatQuestion = (question) => ({
  ...question,
  answers: [...question.incorrectAnswers, question.correctAnswer],
  selected: '',
})

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INDEX: {
      return {
        ...state,
        index: {
          ...state.index,
          ...action.response,
        },
      }
    }
    case SET_ACTIVE_QUIZ_TITLE: {
      return {
        ...state,
        activeQuizTitle: action.response,
      }
    }
    case SET_ACTIVE_QUESTION: {
      return {
        ...state,
        activeQuestion: formatQuestion(action.response),
      }
    }
    case SET_SELECTED_ANSWER: {
      const correctAnswers = [...state.correctAnswers]
      const correctAnswer = correctAnswers[state.index.quiz]

      if (action.response === state.activeQuestion.correctAnswer) {
        correctAnswers[state.index.quiz] = correctAnswer + 1
      }

      return {
        ...state,
        activeQuestion: {
          ...state.activeQuestion,
          selected: action.response,
        },
        correctAnswers,
      }
    }
    case QUIZZES_REQUEST: {
      return {
        ...state,
        error: '',
        loading: true,
      }
    }
    case QUIZZES_REQUEST_SUCCESS: {
      const newQuizzes = [...action.response]

      return {
        ...state,
        allQuizzes: [...state.allQuizzes, ...newQuizzes],
        correctAnswers: [
          ...state.correctAnswers,
          ...Array.from(newQuizzes, () => 0),
        ],
        error: '',
        loaded: true,
        loading: false,
        page: state.page + 1,
      }
    }
    case QUIZZES_REQUEST_FAILURE: {
      return {
        ...state,
        error: action.error,
        loaded: true,
        loading: false,
      }
    }
    case RESET_QUIZZES: {
      return {
        ...initialState,
        activeQuestion: formatQuestion({ ...state.allQuizzes[0].questions[0] }),
        activeQuizTitle: state.allQuizzes[0].title,
        allQuizzes: [...state.allQuizzes],
        correctAnswers: [...state.correctAnswers].map(() => 0),
        index: { quiz: 0, question: 0 },
        loaded: true,
        page: state.page,
        total: state.total,
      }
    }
    default:
      return state
  }
}
