import React from 'react';
import './Certifications.css'; // Make sure this path is correct

import udemy_certificate from "../../assets/udemy.jpg";
import ibm_certificate from "../../assets/ibm.jpeg";
import guvi_certificate from "../../assets/guvi.png";

const Certifications = () => {
  return (
    <div className='mywork' id="work">
      <div className="mywork-title">
        <h1>My Certifications</h1>
      </div>
      <div className="mywork-container">
        <a className='anchor-link' href='https://www.udemy.com/certificate/UC-d5890564-3493-46cd-b42f-40a275d9b382/' target="_blank" rel="noopener noreferrer">
          <img src={udemy_certificate} alt="Udemy Certificate" />
        </a>
        <a className='anchor-link' href='https://courses.cognitiveclass.ai/certificates/ebb62e2ab1ad497e9789127407363974' target="_blank" rel="noopener noreferrer">
          <img src={ibm_certificate} alt="IBM Certificate" />
        </a> 
        <a className='anchor-link' href='https://www.guvi.in/certificate?id=Vm296s1HMA9O868R19&download=true' target="_blank" rel="noopener noreferrer">
          <img src={guvi_certificate} alt="Guvi Certificate" />
        </a>  
      </div>
    </div>
  );
};

export default Certifications; // Ensure this is a default export