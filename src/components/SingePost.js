import React, { useContext } from "react";
import { LoginContext } from "../App";

const SingePost = () => {
  const login = useContext(LoginContext);

  console.log(login);
  return (
    <div>
      <h3>useContext</h3>
      SingePost
      <hr></hr>
    </div>
  );
};

export default SingePost;
