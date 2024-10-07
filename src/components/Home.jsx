import React, { useState } from 'react';
import AppointmentForm from './Appointment'; // Import the form component
import './Home.css';

const Home = () => {
  const [showForm, setShowForm] = useState(false); 

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="home">
      <h2>Welcome to Utsav Medical Center</h2>
      <p>Providing world-class medical services and patient care.</p>
      <button className="cta-button" onClick={toggleForm}>
        Book an Appointment
      </button>

      {showForm && <AppointmentForm closeForm={toggleForm} />}
    </div>
  );
};

export default Home;
