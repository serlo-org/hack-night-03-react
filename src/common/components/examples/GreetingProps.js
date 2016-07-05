import { createElement, PropTypes } from 'react'

const Greeting = ({ name }) => (
  createElement('div', null, `Hello ${name}`)
)

Greeting.propTypes = {
  name: PropTypes.string.isRequired
}

export default Greeting
