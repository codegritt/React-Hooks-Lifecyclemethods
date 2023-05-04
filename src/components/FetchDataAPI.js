import { useState, useEffect } from "react";
import React from "react";

function FetchDataAPI() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <div className="App">
        <h1>using JavaScript inbuilt FETCH API</h1>

        {data.map((dataObj, index) => {
          return (
            <div>
              <p>{dataObj.name}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FetchDataAPI;
