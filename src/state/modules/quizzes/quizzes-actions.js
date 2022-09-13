import { getQuizzes, getMoreQuizzes } from 'data/quizzes'

export const SET_INDEX = '@@quiz/SET_INDEX'

export const SET_ACTIVE_QUIZ_TITLE = '@@quiz/SET_ACTIVE_QUIZ_TITLE'

export const SET_ACTIVE_QUESTION = '@@quiz/SET_ACTIVE_QUESTION'

export const SET_SELECTED_ANSWER = '@@quiz/SET_SELECTED_ANSWER'

export const RESET_QUIZZES = '@@quiz/RESET_QUIZZES'

export const QUIZZES_REQUEST = '@@quiz/QUESTIONS_REQUEST'
export const QUIZZES_REQUEST_SUCCESS = '@@quiz/QUESTIONS_REQUEST_SUCCESS'
export const QUIZZES_REQUEST_FAILURE = '@@quiz/QUESTIONS_REQUEST_FAILURE'

const fetchQuizzesRequest = () => {
  return {
    type: QUIZZES_REQUEST,
  }
}

const fetchQuizzesSuccess = (response) => {
  return {
    type: QUIZZES_REQUEST_SUCCESS,
    response,
  }
}

const fetchQuizzesFailure = (error) => {
  return {
    type: QUIZZES_REQUEST_FAILURE,
    error,
  }
}

export const asyncFetchQuizzes = () => {
  return async (dispatch, getState) => {
    const { page, total } = getState().quizzes
    if (page === total) return

    const fetchQuizzes = page > 0 ? getMoreQuizzes : getQuizzes

    dispatch(fetchQuizzesRequest())
    try {
      const response = await fetchQuizzes()
      dispatch(fetchQuizzesSuccess(response))
      dispatch(setNextQuiz())
    } catch (error) {
      dispatch(fetchQuizzesFailure(error))
    }
  }
}

export const setSelectedAnswer = (response) => {
  return {
    type: SET_SELECTED_ANSWER,
    response,
  }
}

export const setNextQuiz = () => {
  return (dispatch, getState) => {
    const {
      allQuizzes,
      index: { quiz: quizIndex },
    } = getState().quizzes
    const nextQuizIndex = quizIndex + 1
    const nextQuestionIndex = 0
    dispatch({
      type: SET_INDEX,
      response: { quiz: nextQuizIndex, question: nextQuestionIndex },
    })
    dispatch({
      type: SET_ACTIVE_QUIZ_TITLE,
      response: allQuizzes[nextQuizIndex].title,
    })
    dispatch({
      type: SET_ACTIVE_QUESTION,
      response: allQuizzes[nextQuizIndex].questions[nextQuestionIndex],
    })
  }
}

export const setNextQuestion = () => {
  return (dispatch, getState) => {
    const {
      allQuizzes,
      index: { quiz: quizIndex, question: questionIndex },
    } = getState().quizzes
    const nextQuestionIndex = questionIndex + 1
    dispatch({
      type: SET_INDEX,
      response: { question: nextQuestionIndex },
    })
    dispatch({
      type: SET_ACTIVE_QUESTION,
      response: { ...allQuizzes[quizIndex].questions[nextQuestionIndex] },
    })
  }
}

export const resetQuizzes = () => {
  return {
    type: RESET_QUIZZES,
  }
}
