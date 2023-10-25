import React, { useState } from 'react';
import './DateTime.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DateTime = () => {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleButtonClick = async () => {
    try {
      if (date.trim() === '') {
        // Date field is empty, show an alert
        Swal.fire('Please enter the event date.', '', 'warning');
        return;
      }
      // Send a request to check if the date and time are already booked
      const response = await fetch(`/check-availability?date=${date}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        Swal.fire('You are lucky, we available for you.', '', 'success');
        // Date and time are available, navigate to the booking page with date as a query parameter
        navigate(`/bookingForm?date=${date}`);
      } else if (response.status === 409) {
        // Date and time are already booked
        Swal.fire('Sorry, we are booked for the selected date and time.', '', 'error');
      } else {
        // Handle other status codes or errors
        Swal.fire('An error occurred. Please try again later.', '', 'error');
      }
    } catch (error) {
      console.error(error);
      Swal.fire('An error occurred. Please try again later.', '', 'error');
    }
  };

  return (
    <div className="dateCont">
      <div className="wedding-container">
        <div className="cardB1">
          <p style={{ fontSize: "20px" }}>Check when we are available for booking</p>
          <div className="input-group">
            <label htmlFor="date" style={{ color: "white" }}>Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
              required
            />
          </div>
          <div className="input-group">
            <button onClick={handleButtonClick}>Check</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateTime;
