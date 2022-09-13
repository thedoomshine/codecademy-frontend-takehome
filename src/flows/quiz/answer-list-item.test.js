import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { AnswerListItem } from './answer-list-item'

describe('answer list item flow', () => {
it('renders the component', () => {
  const answer = 'This is rendering correctly'
  const hasSelected = false
  const selectedAnswer = ''
  const correctAnswer = 'This is rendering correctly'
  const handleClick = jest.fn()

  render(
    <AnswerListItem
      hasSelected={hasSelected}
      isCorrect={answer === correctAnswer}
      isSelected={answer === selectedAnswer}
      onHandleClick={handleClick}
      text={answer}
    />,
  )
  expect(screen.queryByText(answer)).toBeInTheDocument()
})

it('does not display an svg when no answer is selected', () => {
  const answer = 'This is rendering correctly'
  const hasSelected = false
  const selectedAnswer = ''
  const correctAnswer = 'This is rendering correctly'
  const handleClick = jest.fn()

  render(
    <AnswerListItem
      hasSelected={hasSelected}
      isCorrect={answer === correctAnswer}
      isSelected={answer === selectedAnswer}
      onHandleClick={handleClick}
      text={answer}
    />,
  )
  expect(document.querySelector('svg')).not.toBeInTheDocument()
})

it('displays a checkmark when the correct answer is selected', () => {
  const answer = 'This is rendering correctly'
  const hasSelected = false
  const selectedAnswer = 'This is rendering correctly'
  const correctAnswer = 'This is rendering correctly'
  const handleClick = jest.fn()

  render(
    <AnswerListItem
      hasSelected={hasSelected}
      isCorrect={answer === correctAnswer}
      isSelected={answer === selectedAnswer}
      onHandleClick={handleClick}
      text={answer}
    />,
  )
  expect(screen.queryByTitle('correct')).toBeInTheDocument()
})
it('displays an X when an incorrect answer is selected', () => {
  const answer = 'This is rendering incorrectly'
  const hasSelected = false
  const selectedAnswer = 'This is rendering incorrectly'
  const correctAnswer = 'This is rendering correctly'
  const handleClick = jest.fn()

  render(
    <AnswerListItem
      hasSelected={hasSelected}
      isCorrect={answer === correctAnswer}
      isSelected={answer === selectedAnswer}
      onHandleClick={handleClick}
      text={answer}
    />,
  )
  expect(screen.queryByTitle('incorrect')).toBeInTheDocument()
})

it('fires an event when clicked', () => {
  const answer = 'This is rendering correctly'
  const hasSelected = false
  const selectedAnswer = ''
  const correctAnswer = 'This is rendering correctly'
  const handleClick = jest.fn()

  render(
    <AnswerListItem
      hasSelected={hasSelected}
      isCorrect={answer === correctAnswer}
      isSelected={answer === selectedAnswer}
      onHandleClick={handleClick}
      text={answer}
    />,
  )

  fireEvent.click(screen.queryByText(answer))

  expect(handleClick).toHaveBeenCalledTimes(1)
})
})
