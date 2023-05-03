/* eslint-disable default-case */
import React, { useReducer } from "react";

const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease",
};

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 };

    case ACTION.DECREASE:
      return { count: state.count - 1 };

    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const increaseCount = () => {
    dispatch({ type: "increase" });
  };

  const decreaseCount = () => {
    dispatch({ type: "decrease" });
  };
  return (
    <>
      <h3>UseReducerHook</h3>
      <h3>Count:{state.count}</h3>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      <hr></hr>
    </>
  );
};

export default UseReducerHook;
