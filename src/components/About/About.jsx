import React from 'react';
import './About.css';

export const About = () => {
  return (
    <div className='about' id="about">
      <div className="about-title">
        <h1>About Me</h1>
      </div>
      <div className="about-sections">
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm a motivated <strong>Software Engineer</strong> currently working as a <strong>Python Developer</strong> at <strong>Riverstone Infotech</strong>, Chennai.
              I specialize in backend development, automation, and machine learning. With hands-on experience in scalable API development,
              document intelligence, and cloud solutions using Firebase and AWS, I aim to solve real-world problems through smart technology.
              I also enjoy building intelligent, serverless workflows and integrating AI solutions like OpenAI and LangChain.
            </p>
          </div>
          <h2>Technical Skills</h2>
          <div className="about-skills">
            {/* Programming Languages */}
            <div className='about-skill'><p>Python</p></div>
            <div className='about-skill'><p>C++</p></div>

            {/* Backend Development */}
            <div className='about-skill'><p>Django & DRF</p></div>
            <div className='about-skill'><p>Flask</p></div>
            <div className='about-skill'><p>Docker</p></div>
            <div className='about-skill'><p>PostgreSQL</p></div>
            <div className='about-skill'><p>Firebase Functions</p></div>
            <div className='about-skill'><p>AWS Lambda</p></div>

            {/* Cloud */}
            <div className='about-skill'><p>AWS (S3)</p></div>
            <div className='about-skill'><p>Firebase</p></div>
            <div className='about-skill'><p>GitHub Actions</p></div>
            <div className='about-skill'><p>Logic Apps</p></div>
            <div className='about-skill'><p>Function Apps</p></div>

            {/* Web Development */}
            <div className='about-skill'><p>HTML & CSS</p></div>
            <div className='about-skill'><p>Flask</p></div>
            <div className='about-skill'><p>REST APIs</p></div>

            {/* Data Analysis */}
            <div className='about-skill'><p>NumPy & Pandas</p></div>
            <div className='about-skill'><p>MySQL</p></div>

            {/* GenAI & AI */}
            <div className='about-skill'><p>OpenAI</p></div>
            <div className='about-skill'><p>LangChain</p></div>
            <div className='about-skill'><p>Instructor Library</p></div>

            {/* Tools */}
            <div className='about-skill'><p>Git & GitHub</p></div>
            <div className='about-skill'><p>Agile Methodologies</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};
