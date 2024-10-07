import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <h2>Our Services</h2>
      <ul>
        <li><a href="#general">General Health Checkups</a></li>
        <li><a href="#cardiology">Cardiology</a></li>
        <li><a href="#neurology">Neurology</a></li>
        <li><a href="#pediatrics">Pediatrics</a></li>
        <li><a href="#orthopedics">Orthopedics</a></li>
      </ul>
    </div>
  );
};

export default Services;
