import React, { useEffect, useState } from "react";
import axios from "axios";

function AxiosLib() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  return (
    <>
      <h3>using Axios lib</h3>
      {data.map((dataObj, index) => {
        return (
          <div>
            <p>{dataObj.name}</p>
          </div>
        );
      })}
    </>
  );
}

export default AxiosLib;
