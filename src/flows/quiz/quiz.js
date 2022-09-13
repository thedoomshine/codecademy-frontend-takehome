/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { AnswerListItem } from './answer-list-item'

const answerListStyles = css`
  counter-reset: counter;
  margin-top: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const quizQuestionStyles = css`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-style: italic;
`

const questionMessageStyles = css`
  margin-top: 4rem;
  height: 1.5em;
  font-style: italic;
`

export const Quiz = ({
  answers,
  correctAnswer,
  hasSelected,
  onHandleClick,
  selectedAnswer,
  question,
}) => {
  const questionMessage =
    selectedAnswer === correctAnswer ? 'Correct!' : 'Incorrect...'

  return (
    <div>
      <h2 css={quizQuestionStyles}>{question}</h2>
      <ol css={answerListStyles}>
        {answers.map((answer) => (
          <AnswerListItem
            key={answer}
            hasSelected={hasSelected}
            isSelected={answer === selectedAnswer}
            isCorrect={answer === correctAnswer}
            onHandleClick={onHandleClick}
            text={answer}
          />
        ))}
      </ol>

      <p css={questionMessageStyles}>{hasSelected && questionMessage}</p>
    </div>
  )
}
