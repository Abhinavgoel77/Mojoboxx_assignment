// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./components/signin/Signin";
import Signup from "./components/singup/Signup";
import Booking from "./components/booking/Booking";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Signin />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </Router>
  );
};

export default App;
