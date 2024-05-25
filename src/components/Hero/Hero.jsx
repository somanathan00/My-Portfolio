import React from 'react';
import './Hero.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import leetcode from '../../assets/leetcode.jpg';
import codingninjas from '../../assets/codingninjas.jpg';
import linkedin from '../../assets/linkedin.jpg';
import github from '../../assets/github.jpg';

const Hero = () => {
  return (
    <div className='hero' id='home'>
      <h1><span>I'm Somanathan</span>, Software Developer</h1>
      <p>I am a B.Tech-IT graduate seeking an entry-level software developer role.</p>
      <div className='social-links'>
        <a className='anchor-link' href='https://leetcode.com/somanathan00/' target='_blank' rel='noopener noreferrer'>
          <img src={leetcode} alt='LeetCode Profile' />
        </a>
        <a className='anchor-link' href='https://www.naukri.com/code360/profile/somanathan' target='_blank' rel='noopener noreferrer'>
          <img src={codingninjas} alt='Coding Ninjas Profile' />
        </a>
        <a className='anchor-link' href='https://www.linkedin.com/in/somanathan-p-b48a1b246/' target='_blank' rel='noopener noreferrer'>
          <img src={linkedin} alt='LinkedIn Profile' />
        </a>
        <a className='anchor-link' href='https://github.com/somanathan00' target='_blank' rel='noopener noreferrer'>
          <img src={github} alt='GitHub Profile' />
        </a>
      </div>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' href='#contact' offset={50}>Connect with me</AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href='https://drive.google.com/file/d/1hFg5XC4qOaIOFxk8i9EH50RZBGUvCzC0/view?usp=sharing' target='_blank' rel='noopener noreferrer' className='nothing'>My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
