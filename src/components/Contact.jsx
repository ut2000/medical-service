import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
  
    name: '',
    email: '',
    message: '',
  });

   const handleChange = (e) => {
     setFormData({ ...formData, [e.target.name]: e.target.value });
   };
  const handleSubmit = async (e) => {
    e.preventDefault();
  //   e.preventDefault();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/Contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // id: formData.id,    // Ensure that `formData` matches your backend fields
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
  
      if (response.ok) {
        console.log("response is :", response);
        const result = await response.json();
        alert("data stored successfully...")
        console.log('Success:', result);
        setFormData({   name: '', email: '', message: '' }); // Reset form after submission
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="contact-container">
      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12032964.016702244!2d69.8772252160119!3d22.351114776294747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c42a64fdc587f%3A0x450bfdd6b274d45c!2sIndia!5e0!3m2!1sen!2sus!4v1630598051610!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
        
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
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          <button type="Submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;




// export default Contact;
// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch('http://localhost:5000/api/contact', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
  
//       if (response.ok) {
//         const result = await response.json();
//         console.log('Success:', result);
//         setFormData({ name: '', email: '', message: '' });
//       } else {
//         console.error('Error:', response.statusText);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="contact-container">
//       {/* Map on the left side */}
//       <div className="map-container">
//         <h2>Our Location</h2>
//         <iframe
//           title="Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12032964.016702244!2d69.8772252160119!3d22.351114776294747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c42a64fdc587f%3A0x450bfdd6b274d45c!2sIndia!5e0!3m2!1sen!2sus!4v1630598051610!5m2!1sen!2sus"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>

//       {/* Contact form on the right side */}
//       <div className="contact-form">
//         <h2>Contact Us</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//             required
//           />
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             placeholder="Your Message"
//             required
//           ></textarea>
//           <button type="submit">Send Message</button>
//         </form>

//         <div className="contact-info">
//           <h3>Follow Us</h3>
//           <div className="social-icons">
//             <a href="https://twitter.com/YOUR_TWITTER_HANDLE" target="_blank" rel="noopener noreferrer">
//               <img src="https://image.similarpng.com/thumbnail/2020/06/Popular-Logo-Twitter-clipart-PNG.png" alt="Twitter" />
//             </a>
//             <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
//               <img src="https://cdn-icons-png.freepik.com/256/15707/15707884.png?semt=ais_hybrid" alt="Facebook" />
//             </a>
//             <a href="https://instagram.com/YOUR_INSTAGRAM_HANDLE" target="_blank" rel="noopener noreferrer">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png" alt="Instagram" />
//             </a>
//             <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qfjSM43vc1UXIDm8LhtAF9OIRx-M8IbpFQ&s" alt="WhatsApp" />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
