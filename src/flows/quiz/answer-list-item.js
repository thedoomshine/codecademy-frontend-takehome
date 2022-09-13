/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { Button, Svg } from 'components'

const listItemStyles = css`
  align-items: center;
  display: flex;
  counter-increment: count;
  width: 100%;
  margin-top: 1.5rem;
  padding-left: 2rem;
  position: relative;

  &::before {
    align-items: center;
    display: flex;
    content: counter(count, upper-alpha) '. ';
    font-weight: bold;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    border-style: solid;
    border-width: 0.125rem;
    padding-left: 0.75rem;
    z-index: -1;
  }
`

const listItemButtonStyles = css`
  display: flex;
  align-items: center;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  padding-left: 0.5rem;
  padding-right: 1.5rem;

  text-decoration: inherit;
`

const svgIconStyles = css`
  height: 1em;
  width: 1em;
  position: absolute;
  margin-top: 0.125rem;
  right: 1.25em;
`

export const AnswerListItem = ({
  text,
  onHandleClick,
  isCorrect,
  isSelected,
  hasSelected,
}) => {
  const handleClick = () => {
    if (hasSelected) {
      return
    }
    onHandleClick(text, isCorrect)
  }

  const showIcon = (hasSelected && isCorrect) || isSelected
  const svgName = isCorrect ? 'correct' : 'incorrect'

  const getSelectedColor = () => {
    if (hasSelected) {
      if (isCorrect) {
        return '--color-green'
      } else if (isSelected) {
        return '--color-red'
      } else {
        return '--color-gray-300'
      }
    }

    return '--color-blue'
  }

  return (
    <li
      css={css`
        ${listItemStyles};
        color: var(${getSelectedColor()});
        pointer-events: ${hasSelected && 'none'};
        text-decoration: ${isSelected && !isCorrect && 'line-through'};
        &::before {
          border-color: var(${getSelectedColor()});
        }
        ${!hasSelected &&
        css`
          &:hover {
            color: var(--color-white);
            &::before {
              background-color: var(--brand-purple);
            }
          }
        `}
      `}
    >
      <Button css={listItemButtonStyles} onClick={handleClick}>
        {text}
      </Button>

      {showIcon && (
        <Svg css={svgIconStyles} name={svgName} ariaLabel={svgName} />
      )}
    </li>
  )
}
