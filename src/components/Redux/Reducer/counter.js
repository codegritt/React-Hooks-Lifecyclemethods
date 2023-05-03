import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../Reducer/counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <h3>Using Redux</h3>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <hr></hr>
      </div>
    </div>
  );
}
