import React from 'react'
import { Provider } from 'react-redux'

import App from 'src/common/components/App'
import createStore from 'src/common/store'

const store = createStore()

const Container = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Container
