import React from 'react'
import { render, screen, mockLoadedState } from 'services/test-utils'

import { Quiz } from './quiz'

const { activeQuestion } = { ...mockLoadedState.quizzes }
const onSelectAnswer = jest.fn()

describe('quiz flow', () => {
  beforeEach(() => {
  activeQuestion.selected = ''
})

it('renders the question and all the answers', () => {
  const hasSelected = false

  render(
    <Quiz
      answers={activeQuestion.answers}
      correctAnswer={activeQuestion?.correctAnswer}
      hasSelected={hasSelected}
      onHandleClick={onSelectAnswer}
      selectedAnswer={activeQuestion.selected}
      question={activeQuestion.text}
    />,
  )
  expect(screen.queryByText(activeQuestion.text)).toBeInTheDocument()
  activeQuestion.answers.map((answer) => {
    expect(screen.queryByText(answer)).toBeInTheDocument()
    return answer
  })
})

it('renders "Correct!" when the correct answer is selected', () => {
  const hasSelected = true
  activeQuestion.selected = 'Correct Answer'

  render(
    <Quiz
      answers={activeQuestion.answers}
      correctAnswer={activeQuestion?.correctAnswer}
      hasSelected={hasSelected}
      onHandleClick={onSelectAnswer}
      selectedAnswer={activeQuestion.selected}
      question={activeQuestion.text}
    />,
  )
  expect(screen.queryByText('Correct!')).toBeInTheDocument()
})

it('renders "Incorrect..." when the incorrect answer is selected', () => {
  const hasSelected = true
  activeQuestion.selected = 'Incorrect Answer'

  render(
    <Quiz
      answers={activeQuestion.answers}
      correctAnswer={activeQuestion?.correctAnswer}
      hasSelected={hasSelected}
      onHandleClick={onSelectAnswer}
      selectedAnswer={activeQuestion.selected}
      question={activeQuestion.text}
    />,
  )
  expect(screen.queryByText('Incorrect...')).toBeInTheDocument()
})
})
