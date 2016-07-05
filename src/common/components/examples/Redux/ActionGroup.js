import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import { decrement, increment } from './actions'

const ActionGroup = ({ decrement, increment }) => (
  <div className="btn-group" role="group">
    <button onClick={decrement} type="button" className="btn btn-default">Decrement</button>
    <button onClick={increment} type="button" className="btn btn-default">Increment</button>
  </div>
)

ActionGroup.propTypes = {
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
}

const mapDispatchToProps = { increment, decrement }

export default connect(null, mapDispatchToProps)(ActionGroup)
