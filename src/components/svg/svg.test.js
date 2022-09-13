import React from 'react'
import { render } from '@testing-library/react'

import { Svg } from './svg'

describe('svg component', () => {
  it('renders with the correct icon', () => {
  render(<Svg name="correct" />)
  expect(document.querySelector('svg')).toBeInTheDocument()
})

it('renders nothing if the icon doesnt exists in the library', () => {
  render(<Svg name="nonsense" />)
  expect(document.querySelector('svg')).not.toBeInTheDocument()
})
})
