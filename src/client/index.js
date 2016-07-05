import React from 'react'
import ReactDOM from 'react-dom'

const renderComponent = (component) => ReactDOM.render(component, document.getElementById('app'))

let render = () => {
  const App = require('src/common/components/Container').default

  renderComponent(<App />)
}

if (module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react').default
    renderComponent(<RedBox error={error} />)
  }

  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }

  module.hot.accept('src/common/components/Container', () => {
    setTimeout(render)
  })
}

render()
