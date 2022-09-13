export const getActiveQuiz = ({ allQuizzes, index: { quiz: quizIndex } }) => {
  return allQuizzes && allQuizzes[quizIndex]
}

export const getHasNextQuestion = ({
  allQuizzes,
  index: { quiz: quizIndex, question: questionIndex },
}) => {
  const length = allQuizzes[quizIndex]?.questions.length
  const nextIndex = questionIndex + 1
  return nextIndex < length
}

export const getHasNextQuiz = ({ allQuizzes, index: { quiz: quizIndex } }) => {
  const length = allQuizzes.length
  const nextIndex = quizIndex + 1
  return nextIndex < length
}

export const getTotalQuestions = (state) => {
  const activeQuiz = getActiveQuiz(state)
  return activeQuiz?.questions.length
}
