/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const defaultButtonStyles = css`
  display: flex;

  appearance: none;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  color: inherit;
  font-family: var(--font-family-monospace);
  font-size: 1rem;
  padding: 1.5rem;
  height: 100%;
  width: 100%;

  &:disabled,
  &[disabled] {
    background-color: var(--color-gray-300);
    color: var(--color-white);
    border-color: var(--color-gray-300);
    font-style: italic;
    cursor: not-allowed;
  }
`

export const Button = ({ className, children, disabled, onClick }) => {
  return (
    <button
      css={defaultButtonStyles}
      className={className}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  )
}
