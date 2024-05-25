import React from 'react';
import './MyWork.css';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.jpeg';

const MyWork = () => {
  return (
    <div className='mywork' id="work">
      <div className="mywork-title">
        <h1>My latest work</h1>
      </div>
      <div className="mywork-container">
        <a className='anchor-link' href='https://fooddeliveryapp00.netlify.app/' target="_blank" rel="noopener noreferrer">
          <img src={project1} alt="" />
        </a>
        <a className='anchor-link' href='https://netfixxxx-clone1.netlify.app/' target="_blank" rel="noopener noreferrer">
          <img src={project2} alt="" />
        </a>  
      </div>
    </div>
  );
};

export default MyWork;
