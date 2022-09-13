import { connect } from 'react-redux'

import {
  asyncFetchQuizzes,
  getHasNextQuestion,
  getHasNextQuiz,
  getTotalQuestions,
  resetQuizzes,
  setNextQuestion,
  setNextQuiz,
  setSelectedAnswer,
} from 'state/modules/quizzes'

import { UnconnectedQuizzesView } from './unconnected-quizzes-view'

const mapDispatchToProps = (dispatch) => ({
  fetchQuizzes: () => dispatch(asyncFetchQuizzes()),
  handleNextQuestion: () => dispatch(setNextQuestion()),
  handleNextQuiz: () => dispatch(setNextQuiz()),
  handleSelectAnswer: (answer) => dispatch(setSelectedAnswer(answer)),
  handleStartOver: () => dispatch(resetQuizzes()),
})

const mapStateToProps = ({ quizzes }) => {
  const activeQuizTitle = quizzes.activeQuizTitle
  const activeQuestion = quizzes.activeQuestion
  const hasNextQuestion = getHasNextQuestion(quizzes)
  const hasNextQuiz = getHasNextQuiz(quizzes)
  const totalQuestions = getTotalQuestions(quizzes)
  const hasMoreQuizzes = quizzes.page < quizzes.total

  return {
    activeQuizTitle,
    activeQuestion,
    correctAnswers: quizzes.correctAnswers[quizzes.index.quiz],
    totalQuestions,
    hasNextQuestion,
    hasNextQuiz,
    hasMoreQuizzes,
    loading: quizzes.loading,
    loaded: quizzes.loaded,
    error: quizzes.error,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UnconnectedQuizzesView)
