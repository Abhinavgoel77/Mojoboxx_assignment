// src/components/Login.js
import "./Signin.css";
import { Link,useNavigate } from "react-router-dom";

import React, { useState } from "react";
import axios from "axios";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const onSkip = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/user/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          alert('User Authenticated Successfully');
          setToken(response.data.token);
          navigate("/booking",{state:{token:response.data.token}});
        } else {
          alert('Invalid credentials');
          console.log("Mobile no is not correct");
        }
      })
      .catch((err) => {
        alert(err);
        console.log(err);
      });
  };

  return (
    <div className="login">
      <div className="heading">
        <div className="book">Book</div>
        <div className="cab">Airport Cabs</div>
      </div>
      <div className="intro">
        <div className="introtext">INTRODUCING</div>
      </div>
      <div className="des">
        <div className="destext">
          Hassle Free Airport Transfers Like Never Before.
        </div>
      </div>
      <div className="form">
        <form>
          <div>
            <input
              className="containerinput"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="containerinput"
              type="password"
              name="Mobile Number"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          {/* Add more form fields as needed */}
        </form>
      </div>
      <Link className="needsignin" to="/register">Not Registered? Signup here.</Link>
      {/* <div className="needsignin">Not Registered? Signup here.</div> */}
      <div className="button">
        <button className="lbutton" onClick={onSkip}>Login</button>
      </div>
    </div>
  );
};

export default Signin;
