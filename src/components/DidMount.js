import React, { Component } from "react";

export default class DidMount extends Component {
  constructor() {
    super();
    this.state = {
      pet: "🐿️ ",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ pet: "🐸" });
    }, 3000);
    console.log(this.state);
  }

  componentDidUpdate() {
    debugger;
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.pet}</h1>
      </div>
    );
  }
}
