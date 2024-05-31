import React from 'react';
import './Certifications.css';

import udemy_certificate from "../../assets/udemy.jpg";
import ibm_certificate from "../../assets/ibm.jpeg";
import guvi_certificate from "../../assets/guvi.png";

const Certifications = () => {
  return (
    <div className='certifications' id="certifications">
      <div className="certifications-container">
        <div className='certification'>
          <a className='anchor-link' href='https://www.udemy.com/certificate/UC-d5890564-3493-46cd-b42f-40a275d9b382/' target="_blank" rel="noopener noreferrer">
            <img src={udemy_certificate} alt="Udemy Certificate" />
          </a>
        </div>
        <div className='certification'>
          <a className='anchor-link' href='https://courses.cognitiveclass.ai/certificates/ebb62e2ab1ad497e9789127407363974' target="_blank" rel="noopener noreferrer">
            <img src={ibm_certificate} alt="IBM Certificate" />
          </a>
        </div>
        <div className='certification'>
          <a className='anchor-link' href='https://www.guvi.in/certificate?id=Vm296s1HMA9O868R19&download=true' target="_blank" rel="noopener noreferrer">
            <img src={guvi_certificate} alt="Guvi Certificate" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
