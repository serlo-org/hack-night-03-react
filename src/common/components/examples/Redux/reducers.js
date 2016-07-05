import { combineReducers } from 'redux'

import { DECREMENT, INCREMENT } from './actions'

const counter = (state = 0, action) => {
  switch (action.type) {
    case DECREMENT:
      return state - 1
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default combineReducers({
  counter
})

export const getValue = (state) => state.counter
