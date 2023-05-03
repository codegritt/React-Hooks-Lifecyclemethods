/* eslint-disable no-unreachable */
import React, { Component } from "react";

export class GetError extends Component {
  // Initializing the state
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    // Changing the state to true if some error occurs
    return {
      error: true,
    };
  }
  render() {
    return (
      <>
        <h3>getDerivedStateFromError</h3>
        <span>
          The getDerivedStateFromError() method is invoked if some error occurs
          during the rendering phase of any lifecycle methods or any children
          components. This method is used to implement the Error Boundaries for
          the React application. It is called during the render phase, so
          side-effects are not permitted in this method. For side-effects, use
          componentDidCatch() instead.
        </span>

        <React.StrictMode>
          <div>
            {this.state.error ? <div>Some error</div> : <GFGComponent />}
            <hr></hr>
          </div>
        </React.StrictMode>
      </>
    );
  }
}

class GFGComponent extends Component {
  // GFGComponent throws error as state of GFGCompnonent is not defined
  render() {
    return <h1>{this.state.heading}</h1>;
    <hr></hr>;
  }
}
export default GetError;
