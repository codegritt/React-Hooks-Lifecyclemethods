import React, { Component } from "react";

export class GetSnapshot extends Component {
  // Initializing the state
  state = {
    name: "Gokul",
  };

  componentDidMount() {
    // Changing the state after 1 sec
    setTimeout(() => {
      this.setState({ name: "Rakul" });
    }, 1000);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Displaying the previous value of the state
    document.getElementById("prev").innerHTML =
      "Previous Name: " + prevState.name;
  }

  componentDidUpdate() {
    // Displaying the current value of the state
    document.getElementById("new").innerHTML =
      "Current Name: " + this.state.name;
  }

  render() {
    return (
      <>
        <h3>getSnapshotBeforeUpdate</h3>
        <span>
          The getSnapshotBeforeUpdate() method is invoked just before the DOM is
          being rendered. It is used to store the previous values of the state
          after the DOM is updated. Any value returned by
          getSnapshotBeforeUpdate() method will be used as a parameter for
          componentDidUpdate() method. This function is always used along with
          the componentDidUpdate() method but vice-versa isn’t true.
        </span>

        <div>
          <div id="prev"></div>
          <div id="new"></div>
          <hr></hr>
        </div>
      </>
    );
  }
}

export default GetSnapshot;
