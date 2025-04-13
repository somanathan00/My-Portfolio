import React from 'react';
import './MyWork.css';

const MyWork = () => {
  const projects = [
    {
      title: "Corp Design - Automated Sales Order Processing",
      description: "Built an intelligent document processing system using Azure's Document Intelligence and OpenAI to automate sales order creation in NetSuite. Implemented serverless architecture with Logic Apps and Function Apps for email-based PDF processing.",
      technologies: ["Python", "Azure", "OpenAI", "NetSuite API", "Logic Apps"],
      link: "#"
    },
    {
      title: "Firebase Data Activation System",
      description: "Engineered a real-time content activation system using Firebase Functions and Cloud Messaging. Implemented smart scheduling logic to automatically activate content and notify mobile users through push notifications.",
      technologies: ["Firebase Functions", "Cloud Messaging", "Node.js", "Firestore"],
      link: "#"
    },
    {
      title: "InspectPoint - AI-Powered Document Analysis",
      description: "Developed a serverless document processing pipeline using AWS Lambda and OpenAI's Instructor Library. Built RESTful APIs for PDF processing and implemented CI/CD with GitHub Actions.",
      technologies: ["AWS Lambda", "OpenAI", "PostgreSQL", "Docker", "GitHub Actions"],
      link: "#"
    },
    {
      title: "Fake Job Prediction System",
      description: "Created a machine learning model to detect fraudulent job postings using natural language processing and pattern analysis. Implemented data preprocessing, feature engineering, and model deployment.",
      technologies: ["Python", "scikit-learn", "NLP", "Machine Learning"],
      link: "#"
    },
    {
      title: "Food Delivery App",
      description: "Developed a responsive food delivery web application with React.js. Features include menu browsing, cart management, and order tracking. Implemented user authentication and responsive design.",
      technologies: ["React.js", "CSS", "JavaScript", "Responsive Design"],
      link: "#"
    },
    {
      title: "Netflix Clone",
      description: "Created a Netflix clone with dynamic content loading and responsive design. Implemented movie categorization, search functionality, and trailer playback using YouTube API.",
      technologies: ["React.js", "API Integration", "CSS", "Responsive Design"],
      link: "#"
    }
  ];

  return (
    <div className='mywork' id="work">
      <div className="mywork-title">
        <h2>Featured Projects</h2>
      </div>
      <div className="mywork-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            {project.link !== "#" && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
