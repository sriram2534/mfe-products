import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory } from 'history'

const mount = (elm, options) => {
  const { onNavigate, defaultHistory } = options
  const history = defaultHistory || createMemoryHistory()

  if (!!onNavigate) {
    history.listen(onNavigate)
  }

  ReactDOM.render(<App history={history} />, elm)
}

export { mount }
