import React, { useState, useCallback } from "react";
var funccount = new Set();

const UseCallbackhook = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  alert(funccount.size);

  return (
    <>
      <h3>UseCallback hook</h3>
      <span>
        This hook is used prevent a component from re rendering.It returns a
        memoized callback. In simpler words, it returns a cached version of a
        function
      </span>
      <div>
        Count: {count}
        <button onClick={incrementCounter}>Increase counter</button>
        <button onClick={decrementCounter}>Decrease Counter</button>
        <button onClick={incrementNumber}>increase number</button>
        <hr></hr>
      </div>
    </>
  );
};

export default UseCallbackhook;
