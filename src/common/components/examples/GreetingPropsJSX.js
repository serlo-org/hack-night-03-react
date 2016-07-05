import React, { PropTypes } from 'react'

const Greeting = ({ name }) => (
  <div>Hello {name}</div>
)

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting
