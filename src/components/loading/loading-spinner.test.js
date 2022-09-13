import React from 'react'
import { render } from '@testing-library/react'

import { LoadingSpinner } from './loading-spinner'

describe('loading spinner component', () => {
  it('renders the spinner', () => {
  render(<LoadingSpinner name="correct" />)
  expect(
    document.querySelector('[aria-label="Loading..."]'),
  ).toBeInTheDocument()
})
})
