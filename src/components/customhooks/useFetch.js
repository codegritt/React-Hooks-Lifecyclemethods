import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [responses, setResponses] = useState([]);

  useEffect((url) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setResponses(data));
  });
  return responses;
};

export default useFetch;
