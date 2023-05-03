import React, { Component } from "react";

export class DidCatch extends Component {
  // Initializing the state
  state = {
    error: false,
  };

  componentDidCatch(error) {
    // Changing the state to true
    // if some error occurs
    this.setState({
      error: true,
    });
  }
  render() {
    return (
      <>
        <h3>componentDidCatch</h3>
        <span>
          The componentDidCatch() method is invoked if some error occurs during
          the rendering phase of any lifecycle methods or any children
          components. This method is used to implement the Error Boundaries for
          the React application. It is called during the commit phase, so unlike
          getDerivedStateFromError() which was called during the render phase,
          side-effects are allowed in this method. This method is also used to
          log errors.
        </span>
        <React.StrictMode>
          <div>
            {this.state.error ? <div>Some error</div> : <GFGComponent />}
          </div>
          <hr></hr>
        </React.StrictMode>
      </>
    );
  }
}

class GFGComponent extends Component {
  // GFGComponent throws error as state of
  // GFGCompnonent is not defined

  render() {
    return <h1>{this.state.heading}</h1>;
  }
}

export default DidCatch;
