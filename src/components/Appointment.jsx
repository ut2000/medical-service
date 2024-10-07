import React, { useState } from 'react';
import './Appointment.css';

const AppointmentForm = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('Appointment booked:', formData);
  //   closeForm();  // Close the form after submission
  // };

  // appoitment api

   const handleSubmit = async (e) => {
     e.preventDefault();
  //   e.preventDefault();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/Appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // id: formData.id,    // Ensure that `formData` matches your backend fields
          name: formData.name,
          email: formData.email,
          date:formData.date,
          message: formData.message,
        }),
      });
  
      if (response.ok) {
        console.log("response is :", response);
        const result = await response.json();
        //alert("data stored successfully...")
        alert("Success!", "Data stored successfully...", "success");
        
        console.log('Success:', result);
        setFormData({   name: '', email: '',date:'', message: '' }); // Reset form after submission
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="appointment-form-container">
      <form className="appointment-form" onSubmit={handleSubmit}>
        <button type="button" className="close-button" onClick={closeForm}>
          &times; {/* This is the cross symbol */}
        </button>
        <h2>Book an Appointment</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message (optional)"
        ></textarea>
        <button type="submit">Submit</button>
        <button type="button" onClick={closeForm}>Cancel</button>
      </form>
    </div>
  );
};

export default AppointmentForm;
