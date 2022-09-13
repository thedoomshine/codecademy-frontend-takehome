/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { getMessage } from 'data/messages'

const summaryTitleStyles = css`
  margin-top: 2rem;
`

const summaryMessageStyles = css`
  margin-top: 2rem;
  font-size: 1.5rem;
  font-style: italic;
`

export const QuizSummary = ({ correctAnswers, totalQuestions }) => {
  const message = getMessage()

  return (
    <div>
      <h2 css={summaryTitleStyles}>
        You got {correctAnswers} out of {totalQuestions} right.
      </h2>

      <p css={summaryMessageStyles}>{message}</p>
    </div>
  )
}
