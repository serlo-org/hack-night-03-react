import React, { Component } from 'react'

import Markdown from './Markdown'

class MarkdownForm extends Component {
  constructor(props) {
    super(props)
    this.state = { src: '' }

    this.handleChange = (e) => this.setState({ src: e.target.value })
    this.reset = () => this.setState({ src: '' })
  }

  render() {
    const { src } = this.state

    return (
      <div>
        <textarea className="form-control"
                  rows={5}
                  placeholder="Input Markdown here!"
                  value={src}
                  onChange={this.handleChange}
        />
        <br />
        <div className="btn-group" role="group">
          <button type="button"
                  className="btn btn-danger"
                  onClick={this.reset}
                  disabled={src.length === 0}
          >
            Reset
          </button>
        </div>
        {src.length > 0 ? <hr /> : null}
        <Markdown src={src} />
      </div>
    )
  }
}

export default MarkdownForm
