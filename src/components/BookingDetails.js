import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import "../styles/BookingDetails.css";

function BookingDetails() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [guests, setGuests] = useState(0);

  return (
    <div className="booking-details" id="booking-link">
      <h2 className="booking-heading">Booking Availability</h2>
      <div className="booking-dates">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="date-picker"
            label="From"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            className="date-picker"
            label="To"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <div className="booking-guests">
        <TextField type="number" label="Rooms" className="booking-data" />
        <TextField type="number" label="Adults" className="booking-data" />
        <TextField type="number" label="Children" className="booking-data" />
      </div>
      <div className="booking-buttons">
        <button type="submit" className="search-btn">
          Search
        </button>
      </div>
    </div>
  );
}

export default BookingDetails;
