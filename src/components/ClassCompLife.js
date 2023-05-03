/* eslint-disable no-unreachable */
import React, { Component } from "react";

export class ClassCompLife extends Component<{}, { text: any }> {
  constructor(props: any) {
    super(props);
    this.state = { text: "Welcome!" };
  }

  componentWillMount() {
    this.setState({
      text: "GeeksforGeeks",
    });
  }

  render() {
    <h3>Using Class component</h3>;
    return <h1>{this.state.text}</h1>;
    <hr></hr>;
  }
}

export default ClassCompLife;
