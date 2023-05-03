import React, { useState, useMemo } from "react";

const UseMemohook2 = () => {
  const [number, setNumber] = useState(0);

  const [counter, setCounter] = useState(0);

  const squaredNum = useMemo(() => {
    return squareNum(number);
  }, [number]);

  // Change the state to the input
  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };

  // Increases the counter by 1
  const counterHander = () => {
    setCounter(counter + 1);
  };

  function squareNum(number) {
    console.log("Squaring will be done!");
    return Math.pow(number, 2);
  }
  return (
    <div className="App">
      <h3>useMemo hook</h3>
      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={onChangeHandler}
      ></input>

      <div>OUTPUT: {squaredNum}</div>
      <button onClick={counterHander}>Counter ++</button>
      <div>Counter : {counter}</div>
      <hr></hr>
    </div>
  );
};

export default UseMemohook2;
