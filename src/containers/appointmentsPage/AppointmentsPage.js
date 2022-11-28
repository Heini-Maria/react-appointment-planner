import React from "react";
import { useState } from 'react';
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {
  /*
  Define state variables for 
  appointment info
  */
 const [title, setTitle] = useState('');
 const [date, setDate] = useState('');
 const [time, setTime] = useState('');
 const [contact, setContact] = useState(contacts.length > 0 ? contacts[0].name : "")

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   addAppointment(title, date, time, contact);
    setTitle('');
    setImmediate('');
    setTime('');
    setContact('');
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm 
        contacts={contacts}
        title= {title}
        setTitle= {setTitle}
        date= {date}
        setDate= {setDate}
        time= {time}
        setTime= {setTime}
        contact= {contact}
        setContact= {setContact}
        onSubmit= {handleSubmit}

        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList 
        array={appointments}
        />
      </section>
    </div>
  );
};
