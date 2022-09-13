import React from 'react'

import { render } from 'services/test-utils'

import QuizzesView from './quizzes-view'

describe('connected quizzes view', () => {
  it('Renders the connected app with initialState', () => {
    render(<QuizzesView />)
  })
})
