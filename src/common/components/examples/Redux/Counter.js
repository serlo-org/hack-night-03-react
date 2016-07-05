import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { getValue } from './reducers'

const Counter = ({ value }) => (
  <p>Counter: {value}</p>
)

Counter.propTypes = {
  value: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
  value: getValue(state)
})

export default connect(mapStateToProps)(Counter)
