import React, { useState } from "react";

export default function Code1() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h3>{counter}</h3>

      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase counter
      </button>
    </>
  );
}
