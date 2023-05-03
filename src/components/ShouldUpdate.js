import React, { Component } from "react";

export class ShouldUpdate extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    console.log("Inside render");
    return (
      <>
        <h3>shouldComponentUpdate</h3>
        <span>
          This method makes the component to re-render only when there is a
          change in state or props of a component and that change will affect
          the output.
        </span>
        <div className="App">
          <h1>Component : {this.state.value}</h1>
          <button
            onClick={() => {
              this.setState({ value: this.state.value + 1 });
            }}
          >
            Update
          </button>
        </div>
        <hr></hr>
      </>
    );
  }
}
export default ShouldUpdate;
