import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Button } from './button'

describe('button component', () => {
  it('renders with child text', () => {
  const handleClick = jest.fn()
  const text = 'Hello World'
  render(<Button onClick={handleClick}>{text}</Button>)

  expect(screen.getByText(text)).toBeInTheDocument()
})

it('fires an event when clicked', () => {
  const handleClick = jest.fn()
  const text = 'Hello World'
  render(<Button onClick={handleClick}>{text}</Button>)

  fireEvent.click(screen.getByText(text))

  expect(handleClick).toHaveBeenCalledTimes(1)
})
})
