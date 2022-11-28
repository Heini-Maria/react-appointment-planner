import React from "react";

export const ContactPicker = ({ name, contacts, onChange }) => {
  return (
    <select name={name} onChange={onChange}>
      <option key='default' selected='selected' value=''>Please select contact</option>
      {
        contacts.map((contact) => <option key={contact} value={contact}>{contact}</option>)
      }
    </select>
  );
};
