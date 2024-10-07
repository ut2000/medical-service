import React, { useState } from 'react';
import './Doctors.css';

const Doctors = () => {
  // List of doctors and their specialties
  const doctors = [
    { name: 'Dr. Satyam Srivastav', specialty: 'Cardiology', details: 'The Cardiology Department at Kailash Hospital & Heart Institute, Noida stands as a beacon of hope when it comes to heart care. Setting the standard as one of the best heart hospitals in Noida, Kailash Hospital is committed to delivering the best cardiac care. Our department is staffed by a team of the best heart specialists, dedicated to your heart health and overall well-being.' },
    { name: 'Dr. Vivek Updhyay', specialty: 'Neurology', details: '' },
    { name: 'Dr. Emily Johnson', specialty: 'Pediatrics', details: '' },
    { name: 'Dr. Michael Brown', specialty: 'Orthopedics', details: '' },
  ];

  // State to track which doctor's details are expanded
  const [expandedDoctor, setExpandedDoctor] = useState(null);

  // Function to toggle the details of a doctor
  const toggleDoctorDetails = (index) => {
    if (expandedDoctor === index) {
      setExpandedDoctor(null); // If the same doctor is clicked again, collapse the details
    } else {
      setExpandedDoctor(index); // Expand the clicked doctor's details
    }
  };

  return (
    <div className="doctors">
      <div className="tab">
        <h2>Meet Our Doctors</h2>
      </div>
      <div className="doctor-profiles">
        {doctors.map((doctor, index) => (
          <div className="doctor-profile" key={index}>
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <button className="see-more-button" onClick={() => toggleDoctorDetails(index)}>
              {expandedDoctor === index ? 'See Less' : 'See More'}
            </button>
            {expandedDoctor === index && doctor.details && (
              <p className="doctor-details">{doctor.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
