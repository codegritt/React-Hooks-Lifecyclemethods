import React, { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [othercount, setOthercount] = useState(5);

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("cleanup");
    };
  });

  useEffect(() => {
    document.title = `${count} new messages`;
  });

  useEffect(() => {
    document.title = `${othercount} new messages`;
  }, [othercount]);
  return (
    <>
      <div>
        <h3>useEffect without dependencies</h3>
        <h3>{count} new messages</h3>
        <button onClick={() => setCount(count + 1)}>Increase</button>
      </div>
      <hr></hr>
      <div>
        <h3>useEffect with variables</h3>
        <h3>{othercount}:othercount</h3>
        <button onClick={() => setOthercount(othercount + 5)}>
          Increase by 5
        </button>
      </div>
      <div>
        <h3>useEffect cleanup</h3>
        <h3>{time} in seconds</h3>
      </div>
      <hr></hr>
    </>
  );
};

export default UseEffectHook;
