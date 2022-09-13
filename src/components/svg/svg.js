import React from 'react'
import { SvgLibrary } from './svg-library'

export const Svg = ({ className, name, role = 'img', ariaLabel }) => {
  if (!SvgLibrary[name]) {
    return false
  }

  const { group, viewBox } = SvgLibrary[name]

  return (
    <svg
      aria-label={ariaLabel}
      className={className}
      role={role}
      title={name}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {group}
    </svg>
  )
}
