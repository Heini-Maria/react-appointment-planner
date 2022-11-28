import React from "react";
import { useState, useEffect } from 'react';
import { ContactForm } from '../../components/contactForm/ContactForm';

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
 const [name, setName] = useState('');
 const [phone, setPhone] = useState('');
 const [email, setEmail] = useState('');
 const [dublicate, setDublicate] =useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if(dublicate === false) {
    addContact(name, phone, email);
    setName("");
    setPhone("");
    setEmail("");
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(() => {
  for(let i=0; i<contacts.length; i++) {
    if(contacts[i].name === name) {
      setDublicate(true);
    };
  };
 }, [name])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm 
        name={name}
        setNema={setName}
        phone={phone}
        setPhone={setPhone}
        email={setEmail}
        handleSubmit={handleSubmit}
        /> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        contacts={contacts}
        />
      </section>
    </div>
  );
};
