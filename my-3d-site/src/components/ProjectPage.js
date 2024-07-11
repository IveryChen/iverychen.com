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

      <div className="section">
        <h2 className="section-text"><span className="italics">01&nbsp;</span> Context </h2>
        <h2 className="subheading">How do you redesign the landing page so that more people would navigate to ‘Past Events’?</h2>
        <div className="fine-text">Our team worked with Google Ventures Backed startup, Partiful, to redesign their events page. Partiful is a website and app that allows users to create delightful event pages for birthdays, hangouts, and everything in between. Hosts can invite friends and friends-of-friends when they don't have a phone number or socials. Event pages build hype around the party, allowing guests and hosts to interact with each other.</div>
        <br></br><br></br>

        <h2 className="subheading2">What are some of the existing problems in current design?</h2>

        {/* {projectData.sections.map((section, index) => (
        <div key={index}>
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </div>
      ))} */}
        {/* <p>{project.section1Content}</p> */}
        {/* Additional components or customizations based on project type */}
      </div>

      <div className="section">
      <h2 className="section-text"><span className="italics">02&nbsp;</span> Research </h2>
        {/* <p>{project.section2Content}</p> */}
        {/* Additional components or customizations based on project type */}
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default ProjectPage;
