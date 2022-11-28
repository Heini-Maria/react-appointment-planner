import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={PaymentResponse.handleSubmit}>
        <label for='name'>Name</label>
        <input 
        type='text'
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='your name'
        />
        <label for='phone'>Phone Number</label>
        <input 
        type='tel'
        name='phone'
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder='+xxx xxxx xxx'
        pattern= '^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$'
        />
        <label for='email'>Email</label>
        <input 
        type='email'
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='email address'
        />
        <input type='submit' value='Add Contact'/>
      </form>
    </div>
  );
};
