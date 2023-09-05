// src/components/Signup.js
import "./Booking.css";
import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import axios from "axios";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";

const Booking = () => {
  const location = useLocation();
  const token = location.state.token;

  const [pickup, setPickup] = useState(null);
  const [drop, setDrop] = useState(null);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("10:00");

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const date = new Date(selectedDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-based
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}/${month}/${day}`;

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission with selectedDate and selectedTime
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  const onSkip = () => {
    axios({
      method: "post",
      url: "http://localhost:8000/cab/schedule",
      data: {
        dropLocation: drop,
        pickupLocation: pickup,
        date:formattedDate,
        time:selectedTime
      },
      headers: {
        'x-access-token':token, // Add the token to the "Authorization" header
      },

    })
      .then(function (response) {
        if (response.status === 200) {
          alert('Cab Booked Successfully');
          console.log("Cab Booked Successfully");
        } else {
          alert('All fields are mandatory');
          console.log("All fields are mandatory");
        }
      })
      .catch((err) => {
        alert("All fields are mandatory");
        console.log(err);
      });
  };

  return (
    <div className="cab-booking">
      <div className="cab-heading">
          <div className="cab-book">Book</div>
          <div className="cab-cab">Airport Cabs</div>
      </div>
      <div className="topnav">
        <div className="topnavcon">
          <div className="topnavbuttonmain">Ride</div>
          <div className="topnavbutton">Rental</div>
          <div className="topnavbutton">outstation</div>
          <div className="topnavbutton">Self Drive</div>
        </div>
        <div className="topcontent">
          <form>
            <div>
              <input
                className="containerinput"
                type="text"
                name="Pickup"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                placeholder="Enter Pickup location"
              />
            </div>
            <div>
              <input
                className="containerinput"
                type="text"
                name="Drop"
                value={drop}
                onChange={(e) => setDrop(e.target.value)}
                placeholder="Select Airport and Terminal"
              />
            </div>
            {/* Add more form fields as needed */}
          </form>
          <div className="time">
            <div className="texttime">Schedule your Ride</div>
            <div className="calender">
              <form className="formd">
                <div className="form-group">
                  <label htmlFor="date">Date:</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy-MM-dd"
                    id="date"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="time-label" htmlFor="time">Time:</label>
                  <TimePicker
                    value={selectedTime}
                    onChange={handleTimeChange}
                    id="time"
                    className="time-control"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="agree">
            <button className="nextbutton" onClick={onSkip}>Book ride</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
