import React from 'react'
 import { Input } from "reactstrap";
import "../style/login.css";

const Login = () => {
  return (
    <div className="log ">
     <br></br>
      <h3>User name</h3>
      <Input placeholder="Enter your username" />
       <br></br> <br></br>
      <h3>Password</h3>
      <Input placeholder="Enter your password" />
      <br></br> <br></br> <br></br> <br></br>
      <button> Submit</button>
    </div>
  );
}

export default Login