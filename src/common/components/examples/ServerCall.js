import React, { Component } from 'react'

class ServerCall extends Component {
  constructor(props) {
    super(props)

    this.state = { message: null }
  }

  componentDidMount() {
    window.setTimeout(() => this.setState({ message: 'fancy data fetched' }), 5000)
  }

  render() {
    const { message } = this.state

    return message ? <div>{message}</div> : <span className="fa fa-spinner fa-3x fa-spin " />
  }
}

export default ServerCall
