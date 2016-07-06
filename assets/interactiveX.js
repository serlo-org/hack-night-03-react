import React, { Component } from "react";
import marked from "marked"
import { Heading } from "spectacle";

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
      message: null
    };
  }

  componentDidMount() {
    window.setTimeout(
      () => this.setState({
        message: 'fancy data fetched'
      }),
      3000
    )
  }

  render() {
    const { message } = this.state

    return message ? <div>{message}</div> : <span className="fa fa-spinner fa-3x fa-spin " />
  }
}
