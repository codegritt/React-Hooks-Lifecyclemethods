import React, { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState(0);
  const count = useRef(0);
  const inputElement = useRef();

  useEffect(() => {
    count.current = count.current + 1;
  });

  function handleClick() {
    console.log(inputElement.current);
    inputElement.current.style.width = "300px";
    inputElement.current.focus();
  }

  return (
    <>
      <div>
        <h3>UseRef hook</h3>
        <span>
          Goal is to create mutable elements so that it doesn't re-renders
        </span>
        <br></br>
        <input type="text" onChange={(e) => setName(e.target.value)} />

        <h2>name:{name}</h2>
        <h2>renders:{count.current}</h2>
        <hr></hr>
      </div>
      <div>
        <h3>UseRef hook</h3>
        <span>Goal is to access dom elements directly</span>
        <br></br>
        <input type="text" ref={inputElement} />
        <br></br>
        <button onClick={handleClick}>Click here</button>
        <hr></hr>
      </div>
    </>
  );
};

export default UseRefHook;
