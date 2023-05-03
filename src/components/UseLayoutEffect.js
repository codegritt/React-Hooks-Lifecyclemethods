import React, { useEffect, useLayoutEffect, useState, useRef } from "react";

const UseLayoutEffect = () => {
  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, [toggle]);

  useEffect(() => {
    if (textRef.current != null) {
      const dimension = textRef.current.getBoundingClientRect();
      console.log(dimension);
    }
  }, [toggle]);

  return (
    <>
      <h3>UseLayoutEffect</h3>

      <span>UseLayoutEffect runs before dom gets printed on the screen</span>
      <br></br>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <h3>Gokul learns react</h3>}
      <hr></hr>
    </>
  );
};

export default UseLayoutEffect;
