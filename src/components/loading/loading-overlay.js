/** @jsx jsx */
import { jsx, css } from '@emotion/react'

import { LoadingSpinner } from './loading-spinner'

const loadingOverlayStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: 9;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--brand-purple);
`

export const LoadingOverlay = ({ className }) => {
  return (
    <div className={className} css={loadingOverlayStyles}>
      <LoadingSpinner />
    </div>
  )
}
