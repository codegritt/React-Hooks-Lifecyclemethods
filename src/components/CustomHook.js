import React from "react";
import useFetch from "./customhooks/useFetch";

const CustomHook = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <>
      <h3>Custom hook</h3>
      {data.map((res) => {
        return (
          <h4 key={res.id}>
            {res.id} {res.name}
            <hr></hr>
          </h4>
        );
      })}
    </>
  );
};

export default CustomHook;
