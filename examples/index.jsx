import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// Mount ke #app
const container = document.getElementById('app')
const root = createRoot(container)

const render = (Component) => {
  root.render(<Component />)
}

render(App)

// HMR (Hot Module Replacement)
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}
