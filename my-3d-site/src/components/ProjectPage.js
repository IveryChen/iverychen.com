import React from 'react';
import { useParams } from 'react-router-dom';
import jsonData from '../data'; 

const ProjectPage = () => {
  const { projectName } = useParams(); // Get the dynamic part of the URL
  const project = jsonData.find((item) => item.path === projectName); 

  if (!project) {
    return <div>Project not found</div>;
  }

  console.log(project);
  return (
    <div className="project-page">
     <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />

      <div className="section">
        <h2>Section 1</h2>
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
        <h2>Section 2</h2>
        {/* <p>{project.section2Content}</p> */}
        {/* Additional components or customizations based on project type */}
      </div>

      {/* Add more sections as needed */}
    </div>
  );
};

export default ProjectPage;
