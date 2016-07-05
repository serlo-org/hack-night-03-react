import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import devTools from 'remote-redux-devtools'

import ActionGroup from './ActionGroup'
import Counter from './Counter'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  undefined,
  devTools({ realtime: true })
)

const Container = () => (
  <Provider store={store}>
    <div>
      <Counter />
      <ActionGroup />
    </div>
  </Provider>
)

export default Container
