import {
  getActiveQuiz,
  getHasNextQuestion,
  getHasNextQuiz,
  getTotalQuestions,
} from './quizzes-selectors'

describe('quizzies redux module selectors', () => {
  it('returns the active quiz', () => {
    const correctQuiz = { title: 'Correct Quiz' }
    const incorrectQuiz = { title: 'Incorrect Quiz' }
    expect(
      getActiveQuiz({
        allQuizzes: [incorrectQuiz, correctQuiz],
        index: { quiz: 1 },
      }),
    ).toEqual(correctQuiz)
  })

  it('returns whether or not there is another question', () => {
    const allQuizzes = [
      {
        title: 'Quiz 1',
        questions: [{ text: 'Question 1' }, { text: 'Question 2' }],
      },
    ]
    expect(
      getHasNextQuestion({
        allQuizzes,
        index: { quiz: 0, question: 0 },
      }),
    ).toBeTruthy()
    expect(
      getHasNextQuestion({
        allQuizzes,
        index: { quiz: 1, question: 1 },
      }),
    ).toBeFalsy()
  })

  it('returns whether or not there is another quiz', () => {
    const allQuizzes = [
      {
        title: 'Quiz 1',
      },
      {
        title: 'Quiz 2',
      },
    ]
    expect(getHasNextQuiz({ allQuizzes, index: { quiz: 0 } })).toBeTruthy()
    expect(getHasNextQuiz({ allQuizzes, index: { quiz: 1 } })).toBeFalsy()
  })

  it('returns the number of questions in the active quiz', () => {
    const questions = ['Question 1', 'Question 2', 'Question 3']
    expect(
      getTotalQuestions({ allQuizzes: [{ questions }], index: { quiz: 0 } }),
    ).toEqual(questions.length)
  })
})
