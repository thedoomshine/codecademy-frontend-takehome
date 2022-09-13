// loading spinner adapated from
// https://loading.io/css/

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const rippleStyles = css`
  color: var(--color-white);
  display: inline-block;
  position: relative;
  width: 5rem;
  height: 5rem;

  & > div {
    transform-origin: 2.5rem 2.5rem;
    animation: spinner 1.2s linear infinite;

    &:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0.175rem;
      left: 2.3rem;
      width: 0.375rem;
      height: 1.125rem;
      border-radius: 25%;
      background: currentColor;
    }

    &:nth-of-type(1) {
      transform: rotate(0deg);
      animation-delay: -1.1s;
    }

    &:nth-of-type(2) {
      transform: rotate(30deg);
      animation-delay: -1s;
    }

    &:nth-of-type(3) {
      transform: rotate(60deg);
      animation-delay: -0.9s;
    }

    &:nth-of-type(4) {
      transform: rotate(90deg);
      animation-delay: -0.8s;
    }

    &:nth-of-type(5) {
      transform: rotate(120deg);
      animation-delay: -0.7s;
    }

    &:nth-of-type(6) {
      transform: rotate(150deg);
      animation-delay: -0.6s;
    }

    &:nth-of-type(7) {
      transform: rotate(180deg);
      animation-delay: -0.5s;
    }

    &:nth-of-type(8) {
      transform: rotate(210deg);
      animation-delay: -0.4s;
    }

    &:nth-of-type(9) {
      transform: rotate(240deg);
      animation-delay: -0.3s;
    }

    &:nth-of-type(10) {
      transform: rotate(270deg);
      animation-delay: -0.2s;
    }

    &:nth-of-type(11) {
      transform: rotate(300deg);
      animation-delay: -0.1s;
    }

    &:nth-of-type(12) {
      transform: rotate(330deg);
      animation-delay: 0s;
    }
  }

  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const LoadingSpinner = ({ className }) => {
  return (
    <div
      className={className}
      css={rippleStyles}
      aria-busy="true"
      aria-hidden="false"
      aria-label="Loading..."
      aria-live="polite"
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}
