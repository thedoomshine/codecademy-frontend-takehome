import React from 'react'
import { render, screen } from '@testing-library/react'

import { QuizSummary } from './quiz-summary'

describe('quiz summary flow', () => {
  it('renders with the correct number of questions and answers', () => {
  const correctAnswers = 4
  const nextQuiz = jest.fn()
  const hasNextQuiz = true
  const setShowSummary = jest.fn()
  const totalQuestions = 4

  render(
    <QuizSummary
      correctAnswers={correctAnswers}
      handleNextQuiz={nextQuiz}
      hasNextQuiz={hasNextQuiz}
      setShowSummary={setShowSummary}
      totalQuestions={totalQuestions}
    />,
  )
  expect(
    screen.queryByText(
      `You got ${correctAnswers} out of ${totalQuestions} right.`,
    ),
  ).toBeInTheDocument()
})
})
