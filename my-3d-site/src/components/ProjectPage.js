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

       {Object.keys(project).map((key) => {
        let sectionIndex = 0;
        if (key.startsWith('section')) {
          sectionIndex = key.slice(-1);
          
          return (
            <div key={sectionIndex} className="section">
              {project[key].map((section) => {
                switch (section.type) {
                  case 'section-text':
                    return (
                      <h2 key={sectionIndex} className="section-text">
                        <span className="italics">0{sectionIndex}&nbsp;</span>{section.content}
                      </h2>
                    );
                  case 'subheading':
                    return (
                      <h2 key={sectionIndex} className="subheading">
                        {section.content}
                      </h2>
                    );
                  case 'text':
                    return (
                      <div key={sectionIndex} className="fine-text">
                        {section.content}
                      </div>
                    );
                  case 'list':
                    return (
                      <div>
                      <div key={sectionIndex} className="fine-text">
                        {section.content_list_1}
                      </div>
                      <br></br>
                      <div key={sectionIndex} className="fine-text">
                        {section.content_list_2}
                      </div>
                      <br></br>
                      <div key={sectionIndex} className="fine-text">
                        {section.content_list_3}
                      </div>
                      </div>
                    );
                  case 'image':
                    return (
                      <div key={sectionIndex} className="image-container">
                        <img src={images[section.content]} alt={section.image_descript} className="normal-image" />
                        <div className="small-text">{section.image_descript}</div>
                      </div>
                    );
                  case 'image-text-h-container':
                    return (
                        <div className="image-text-container">
                          <div className="flex-text-container">
                            <div className="small-text">{section.content_stack_1}</div>
                            <div className="small-text">{section.content_stack_2}</div>
                          </div>
                          <div className="flex-image-container-h">
                            <img src={images[section.image_stack_h_1]} alt={section.image_stack_h_1} className="normal-image" />
                            <img src={images[section.image_stack_h_2]} alt={section.image_stack_h_2} className="normal-image" />
                            <div className="small-text">{section.image_stack_h_descript}</div>
                          </div>
                        </div>
                    );
                  case 'image-text-v-container':
                      return (
                          <div className="image-text-container">
                            <div className="flex-text-container">
                              <div className="small-text">{section.content_stack_1}</div>
                              <div className="small-text">{section.content_stack_2}</div>
                            </div>
                            <div className="flex-image-container-v">
                              <img src={images[section.image_stack_v_1]} alt={section.image_stack_v_1} className="normal-image" />
                              <img src={images[section.image_stack_v_2]} alt={section.image_stack_v_2} className="normal-image" />
                              <div className="small-text">{section.image_stack_v_descript}</div>
                            </div>
                          </div>
                    );
                    case 'image-stack-h-container':
                      return(
                      <div className="section-container">
                        <div className="flex-image-container-h">
                          <img src={images[section.image_stack_h_1]} alt={section.image_stack_h_1} className="normal-image" />
                          <img src={images[section.image_stack_h_2]} alt={section.image_stack_h_2} className="normal-image" />
                          <img src={images[section.image_stack_h_3]} alt={section.image_stack_h_3} className="normal-image" />
                          <img src={images[section.image_stack_h_4]} alt={section.image_stack_h_4} className="normal-image" />
                          <img src={images[section.image_stack_h_5]} alt={section.image_stack_h_5} className="normal-image" />
                        </div>
                        <div className="small-text">{section.image_stack_h_descript}</div>
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

      {/* <div className="image-text-container">
        <div className="flex-text-container">
          <div className="normal">Individually, we sketched out our own versions of user flow based on client expectations and problems.</div>
          <div className="normal">We met with founders along each step of the way, modifying lo-fi prototypes as we go.</div>
        </div>
        <div className="flex-image-container">
          <img src={images['partiful']} alt={"blah"} className="title-image" />
          <img src={images['partiful']} alt={"blah"} className="title-image" />
        </div>
      </div> */}

    </div>
  );
};

export default ProjectPage;