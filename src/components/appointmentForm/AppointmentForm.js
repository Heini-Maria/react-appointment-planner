import React from "react";
import { ContactPicker } from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for='title'>Title</label>
      <input 
      type='text'
      name='title'
      value= {title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder = 'Title for the appointment'
      />
      <label for='date'>Date</label>
      <input 
      type='date'
      name='date'
      value={date}
      onChange={(e) => setDate(e.target.value)}
      />
      <label for='time'>Time</label>
      <input 
      type='time'
      name='time'
      value={time}
      onChange= {(e) => setTime(e.target.value)}
      />
      <input type='submit' value='Set Appointment'/>


    </form>
  );
};
