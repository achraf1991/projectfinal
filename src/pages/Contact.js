import React from 'react'
// import { ReactDOM  } from 'react-dom';
 import { Input } from "reactstrap";
import "../style/contact.css";

const Contact = () => {
  return (
    <div
      className="contact">
    
    
      <h1>Email Us </h1>
      <h4>Name</h4>
      <Input style={{ width: "500px" }} placeholder="Enter your username" />
      <h4>Email</h4>
      <Input style={{ width: "500px" }} placeholder="example@example.com" />
      <h4>Phone Number</h4>
      <Input style={{ width: "500px" }} placeholder="+21654......" />
      <h4>Subject</h4>
      <Input style={{ width: "500px" }} placeholder="Enter your subject" />
      <h4>Message Text</h4>
      <Input
        style={{ height: "50px", width: "500px" }}
        placeholder="Enter your message text"
      />
      <br></br> <br></br> <br></br>
      <button> Send </button>
    </div>
  );
}

export default Contact