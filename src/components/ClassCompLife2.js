/* eslint-disable no-useless-constructor */
import React, { Component } from "react";

export class ClassCompLife2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      show: false,
    };
  }

  componentDidMount() {
    console.log("componentdidmount is executed");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    return (
      <>
        <div>ClassCompLife2</div>
        <p>{this.props.num}</p>
        <button onClick={() => this.setState({ num: this.state.num + 1 })}>
          Add One
        </button>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle
        </button>
        {this.state.show && <ClassCompLife2 num={this.state.num} />}
        <hr></hr>
      </>
    );
  }
}

export default ClassCompLife2;
