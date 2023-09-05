// src/components/Signup.js
import "./Singup.css";
import { Link, useNavigate} from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const navigate = useNavigate();

  const onSkip = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/user/register",
      data: {
        username: name,
        email: email,
        password: password,
      },
    })
      .then(function (response) {
        if (response.status === 200) {
          alert('User Successfully Registered');
          console.log("User Successfully Registered");
          navigate("/");
        } else {
          alert('User already exists');
          console.log("User already exists");
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
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>
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
      <Link className="needsignup" to="/">Already Registered? Signin here.</Link>
      <div className="button">
        <button className="lbutton" onClick={onSkip}>Sign up</button>
      </div>
    </div>
  );
};

export default Signup;
