import React, { useState } from "react";

const UseStateHook = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState(0);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h4>useState hook</h4>
      <h1>Counter :{counter}</h1>
      <button onClick={increaseCounter}>Increase</button>
      <hr></hr>

      <h4>useState hook with input</h4>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>
        {name} has clicked {counter} number of times
      </h3>
      <button onClick={increaseCounter}>Increase</button>
      <hr></hr>
    </div>
  );
};

export default UseStateHook;
