import React from 'react'
import { render, screen } from 'services/test-utils'

import { UnconnectedQuizzesView } from './unconnected-quizzes-view'

const activeQuestion = {
  text: 'Which element is used for a top-level heading?',
  correctAnswer: 'Correct Answer',
  incorrectAnswers: [
    'Incorrect Answer',
    'Super Incorrect Answer',
    'Almost Correct Answer',
  ],
  answers: [
    'Correct Answer',
    'Incorrect Answer',
    'Super Incorrect Answer',
    'Almost Correct Answer',
  ],
  selected: '',
  correct: false,
}
const activeQuizTitle = 'Basics of Testing'
const fetchQuizzes = jest.fn()
const handleNextQuestion = jest.fn()
const handleNextQuiz = jest.fn()
const handleSelectAnswer = jest.fn()
const handleStartOver = jest.fn()
const totalQuestions = 4

describe('unconnected quizzes view', () => {
it('fetches the quizzes on the initial render', () => {
  const correctAnswers = [0]
  const hasNextQuestion = false
  const hasNextQuiz = false
  const loading = false
  const loaded = false
  const hasMoreQuizzes = true

  render(
    <UnconnectedQuizzesView
      activeQuestion={activeQuestion}
      activeQuizTitle={activeQuizTitle}
      correctAnswers={correctAnswers}
      hasNextQuestion={hasNextQuestion}
      hasNextQuiz={hasNextQuiz}
      loading={loading}
      loaded={loaded}
      fetchQuizzes={fetchQuizzes}
      handleNextQuestion={handleNextQuestion}
      handleNextQuiz={handleNextQuiz}
      handleSelectAnswer={handleSelectAnswer}
      handleStartOver={handleStartOver}
      hasMoreQuizzes={hasMoreQuizzes}
      totalQuestions={totalQuestions}
    />,
  )

  expect(fetchQuizzes).toHaveBeenCalledTimes(1)
})

it('renders quiz when loaded', () => {
  const correctAnswers = [0]
  const hasNextQuestion = false
  const hasNextQuiz = false
  const loading = false
  const loaded = true
  const hasMoreQuizzes = true

  render(
    <UnconnectedQuizzesView
      activeQuestion={activeQuestion}
      activeQuizTitle={activeQuizTitle}
      correctAnswers={correctAnswers}
      hasNextQuestion={hasNextQuestion}
      hasNextQuiz={hasNextQuiz}
      loading={loading}
      loaded={loaded}
      fetchQuizzes={fetchQuizzes}
      handleNextQuestion={handleNextQuestion}
      handleNextQuiz={handleNextQuiz}
      handleSelectAnswer={handleSelectAnswer}
      handleStartOver={handleStartOver}
      hasMoreQuizzes={hasMoreQuizzes}
      totalQuestions={totalQuestions}
    />,
  )

  expect(screen.queryByText(activeQuizTitle)).toBeInTheDocument()
})

it('does not render the quiz when loading', () => {
  const correctAnswers = [0]
  const hasNextQuestion = false
  const hasNextQuiz = false
  const loading = true
  const loaded = false
  const hasMoreQuizzes = true

  render(
    <UnconnectedQuizzesView
      activeQuestion={activeQuestion}
      activeQuizTitle={activeQuizTitle}
      correctAnswers={correctAnswers}
      hasNextQuestion={hasNextQuestion}
      hasNextQuiz={hasNextQuiz}
      loading={loading}
      loaded={loaded}
      fetchQuizzes={fetchQuizzes}
      handleNextQuestion={handleNextQuestion}
      handleNextQuiz={handleNextQuiz}
      handleSelectAnswer={handleSelectAnswer}
      handleStartOver={handleStartOver}
      hasMoreQuizzes={hasMoreQuizzes}
      totalQuestions={totalQuestions}
    />,
  )

  expect(screen.queryByText(activeQuizTitle)).not.toBeInTheDocument()
})
})
