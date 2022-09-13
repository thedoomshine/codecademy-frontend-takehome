import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Global, css } from '@emotion/react'

import { QuizzesView } from 'views'
import { breakpoints, colors, fonts } from 'theme'
import { store } from 'state/store'

const styleReset = css`
  ${breakpoints}
  ${colors}
  ${fonts}

  *, *::after, *::before {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
  }

  html {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    color: var(--color-blue);
    font-family: var(--font-family-sans-serif);
  }
`

const renderApp = () =>
  render(
    <React.StrictMode>
      <Global styles={styleReset} />
      <Provider store={store}>
        <QuizzesView />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  )

renderApp()
