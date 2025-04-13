import React from 'react';
import './Certifications.css';

import udemy_certificate from "../../assets/udemy.jpg";
import ibm_certificate from "../../assets/ibm.jpeg";
import guvi_certificate from "../../assets/guvi.png";

const Certifications = () => {
  const certificates = [
    {
      title: "Udemy Certification",
      image: udemy_certificate,
      link: "https://www.udemy.com/certificate/UC-d5890564-3493-46cd-b42f-40a275d9b382/",
      alt: "Udemy Certificate"
    },
    {
      title: "IBM Certification",
      image: ibm_certificate,
      link: "https://courses.cognitiveclass.ai/certificates/ebb62e2ab1ad497e9789127407363974",
      alt: "IBM Certificate"
    },
    {
      title: "Guvi Certification",
      image: guvi_certificate,
      link: "https://www.guvi.in/certificate?id=Vm296s1HMA9O868R19&download=true",
      alt: "Guvi Certificate"
    }
  ];

  return (
    <div className='certifications' id="certifications">
      <div className="certifications-title">
        <h2>My Certifications</h2>
      </div>
      <div className="certifications-container">
        {certificates.map((cert, index) => (
          <a 
            key={index} 
            className='certificate-link' 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="certificate-card">
              <div className="certificate-image">
                <img src={cert.image} alt={cert.alt} />
              </div>
              <h3>{cert.title}</h3>
              <span className="view-text">View Certificate →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;