/** @jsx jsx */
import { useEffect, useMemo, useState } from 'react'
import { jsx, css } from '@emotion/react'

import { Button, LoadingOverlay } from 'components'
import { Quiz, QuizSummary } from 'flows'
import { shuffleArray } from 'services/shuffle-array'

const quizContainerStyles = css`
  display: flex;
  flex-direction: column;
`

const quizHeaderStyles = css`
  margin-left: 0;
  margin-right: auto;

  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 900;
`

const quizzesViewstyles = css`
  margin: auto;
  padding: 2rem;
  max-width: 96rem;
  width: 100%;
`

const submitButtonStyles = css`
  align-self: flex-start;
  margin-top: 1rem;
  padding: 1rem 2rem;

  background-color: var(--color-blue);
  border: solid 0.125rem var(--color-blue);
  color: var(--color-white);
  font-weight: 900;
  text-transform: uppercase;
`

export const UnconnectedQuizzesView = ({
  activeQuestion: {
    answers = [],
    correctAnswer = '',
    selected = '',
    text = '',
  },
  activeQuizTitle,
  correctAnswers,
  hasNextQuestion,
  hasNextQuiz,
  loading,
  loaded,
  fetchQuizzes,
  handleNextQuestion,
  handleNextQuiz,
  handleSelectAnswer,
  handleStartOver,
  hasMoreQuizzes,
  totalQuestions,
}) => {
  // on page load, fetch the initial quizzes
  useEffect(() => {
    if (!loading && !loaded) {
      fetchQuizzes()
    }
  }, [loading, loaded, fetchQuizzes])

  const [showSummary, setShowSummary] = useState(false)

  const hasSelected = Boolean(selected)
  const shuffledAnswers = useMemo(() => {
    return shuffleArray(answers)
  }, [answers])

  const onSelectAnswer = (answer) => {
    handleSelectAnswer(answer)
  }

  const handleNext = () => {
    if (!showSummary) {
      if (hasNextQuestion) {
        return handleNextQuestion()
      }
      return setShowSummary(true)
    } else {
      setShowSummary(false)
      if (hasNextQuiz) {
        return handleNextQuiz()
      }

      if (hasMoreQuizzes) {
        return fetchQuizzes()
      }

      return handleStartOver()
    }
  }

  const getButtonText = () => {
    if (!showSummary) {
      if (hasNextQuestion) {
        return 'Next Question'
      }
      return 'Show Summary'
    } else {
      if (hasNextQuiz || hasMoreQuizzes) {
        return 'Next Quiz'
      }

      return 'Start Over'
    }
  }

  return (
    <div css={quizzesViewstyles}>
      {loading && <LoadingOverlay />}

      {loaded && (
        <div css={quizContainerStyles}>
          <h1 css={quizHeaderStyles}>{activeQuizTitle}</h1>
          {showSummary && (
            <QuizSummary
              correctAnswers={correctAnswers}
              totalQuestions={totalQuestions}
            />
          )}
          {!showSummary && (
            <Quiz
              answers={shuffledAnswers}
              correctAnswer={correctAnswer}
              hasSelected={hasSelected}
              onHandleClick={onSelectAnswer}
              selectedAnswer={selected}
              question={text}
            />
          )}

          <Button
            onClick={handleNext}
            css={submitButtonStyles}
            disabled={!hasSelected}
          >
            {getButtonText()}
          </Button>
        </div>
      )}
    </div>
  )
}
