import { createStore } from 'redux'
import devTools from 'remote-redux-devtools'

import rootReducer from './reducer'

export default (initialState) => (
  createStore(
    rootReducer,
    initialState,
    devTools({ realtime: true })
  )
)
