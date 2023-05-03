import React, { useState } from "react";

const ObjectUseState = () => {
  const [details, setDetails] = useState({ counter: 0, name: "" });

  function increaseCounter() {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
    }));
  }
  console.log(details);
  return (
    <>
      <div>
        <h4>useState hook with object</h4>
        <input type="text" onChange={(e) => e.target.value} />
        <h3>
          {details.name} has clicked {details.counter} number of times
        </h3>
        <button onClick={increaseCounter}>Increase</button>
        <hr></hr>
      </div>
    </>
  );
};

export default ObjectUseState;
