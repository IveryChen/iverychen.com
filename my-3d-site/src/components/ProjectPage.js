import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../data'; 
import images from '../imageImports'; 

const ProjectPage = () => {
  const { projectName } = useParams(); // Get the dynamic part of the URL
  const project = jsonData.find((item) => item.path === projectName); 

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project);
  return (
    <div className="project-page">
      <div className="title-card">
        <h1 className="heading">{project.title}</h1>
        <div className="italics">{project.duration}, <span className="normal">{project.time}</span></div>
        <div className="image-container">
          <img src={images[project.image]} alt={project.eventName} className="title-image" />
        </div>
        <div className="extra-info-container">
            <div className="italics">Team: <span className="normal">{project.team}</span></div>
            <div className="italics">Role: <span className="normal">{project.role}</span></div>
            <div className="italics">Tools: <span className="normal">{project.tools}</span></div>
        </div>
      </div>

       {/* Render each section dynamically */}
       {Object.keys(project).map((key) => {
        if (key.startsWith('section')) {
          return (
            <div key={key} className="section">
              {project[key].map((section, index) => {
                switch (section.type) {
                  case 'section-text':
                    return (
                      <h2 key={index} className="section-text">
                        <span className="italics">0{index + 1}&nbsp;</span>{section.content}
                      </h2>
                    );
                  case 'subheading':
                    return (
                      <h2 key={index} className="subheading">
                        {section.content}
                      </h2>
                    );
                  case 'text':
                    return (
                      <div key={index} className="fine-text">
                        {section.content}
                      </div>
                    );
                  case 'image':
                    return (
                      <div key={index} className="image-container">
                        <img src={images[section.content]} alt={project.eventName} className="title-image" />
                      </div>
                    );
                  default:
                    return null;
                }
              })}
            </div>
          );
        }
        return null;
      })}

      {/* <div className="section">
        {project.section1.map((section, index) => {
              switch (section.type) {
                case 'section-text':
                  return (
                    <h2 key={index} className="section-text">
                      <span className="italics">0{index + 1}&nbsp;</span>{section.content}
                    </h2>
                  );
                case 'subheading':
                  return (
                    <h2 key={index} className="subheading">
                      {section.content}
                    </h2>
                  );
                case 'text':
                  return (
                    <div key={index} className="fine-text">
                      {section.content}
                    </div>
                  );
                case 'image':
                  return (
                    <div key={index} className="image-container">
                      <img src={images[section.content]} alt={project.eventName} className="title-image" />
                    </div>
                  );
                default:
                  return null;
              }
        })}
      </div> */}

  


      {/* <div className="section">
        <h2 className="section-text"><span className="italics">01&nbsp;</span> Context </h2>
        <h2 className="subheading">How do you redesign the landing page so that more people would navigate to ‘Past Events’?</h2>
        <div className="fine-text">Our team worked with Google Ventures Backed startup, Partiful, to redesign their events page. Partiful is a website and app that allows users to create delightful event pages for birthdays, hangouts, and everything in between. Hosts can invite friends and friends-of-friends when they don't have a phone number or socials. Event pages build hype around the party, allowing guests and hosts to interact with each other.</div>
        <br></br><br></br>


        <h2 className="subheading2">What are some of the existing problems in current design?</h2>
        <div className="image-container">
          <img src={images[project.section1Content]} alt={project.eventName} className="title-image" />
        </div>

      </div> */}

      {/* <div className="section">
      <h2 className="section-text"><span className="italics">02&nbsp;</span> Research </h2>
      </div> */}

      {/* Add more sections as needed */}
    </div>
  );
};

export default ProjectPage;
