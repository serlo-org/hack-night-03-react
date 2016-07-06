import React, { Component } from "react";
import marked from "marked"
import { Heading } from "spectacle";

const Markdown = ({ src }) => {
  const html = marked(src)

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

const styles = {
      padding: 10,
      background: "red",
      minWidth: 300,
      marginTop: 10,
      textTransform: "uppercase",
      border: "none",
      color: "white",
      outline: "none",
      fontWeight: "bold",
      fontSize: "1em"
    };

export default class Interactive extends Component {
  constructor() {
    super();
    this.state = {
      src: ''
    };
    this.handleChange = (e) => this.setState({ src: e.target.value })
    this.reset = () => this.setState({ src: '' })
  }

  render() {
    const { src } = this.state

    return (
      <div>
        <textarea
          value={src}
          onChange={this.handleChange}
          style={{
            width: '100%',
            color: '#000'
          }}
          rows={5}
          />
        <br />
        <button
          style={styles}
          onClick={this.reset}>Reset</button>
        <Markdown src={src} />
      </div>
    )
  }
}
