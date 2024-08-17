import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import jsonData from "../../data";
import images from "../../imageImports";
import YouTubeVideoComponent from "../YouTubeVideoComponent";
import VimeoVideoComponent from "../VimeoVideoComponent";

const ProjectPage = () => {
  const { projectName } = useParams(); // Get the dynamic part of the URL
  const project = jsonData.find((item) => item.path === projectName);

  const [isVisible, setIsVisible] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      checkVisibility(section1Ref, "section1");
      checkVisibility(section2Ref, "section2");
      checkVisibility(section3Ref, "section3");
      checkVisibility(section4Ref, "section4");
    };

    const checkVisibility = (ref, sectionName) => {
      if (ref.current) {
        const scrollTop = window.scrollY;
        const offsetTop = ref.current.offsetTop;
        const windowHeight = window.innerHeight;

        if (scrollTop > offsetTop - windowHeight / 2) {
          setIsVisible((prevState) => ({
            ...prevState,
            [sectionName]: true,
          }));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  // console.log(project);

  return (
    <div className="project-page">
      <div className="title-card">
        <h1 className="heading">{project.title}</h1>
        <div className="italics">
          {project.duration}, <span className="normal">{project.time}</span>
        </div>
        <div className="title-image-container">
          <img
            src={images[project.image]}
            alt={project.eventName}
            className="title-image"
          />
          <div className="image-overlay">
            <a
              href={project.deployed}
              className="overlay-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.title.toLowerCase()} <span>↗</span>{" "}
            </a>
          </div>
        </div>
        <div className="extra-info-container">
          <div className="italics">
            Team: <span className="normal">{project.team}</span>
          </div>
          <div className="italics">
            Role: <span className="normal">{project.role}</span>
          </div>
          <div className="italics">
            Tools: <span className="normal">{project.tools}</span>
          </div>
        </div>
      </div>

      {Object.keys(project).map((key) => {
        let sectionIndex = 0;
        if (key.startsWith("section")) {
          sectionIndex = key.slice(-1);

          return (
            <div
              key={sectionIndex}
              className={`section ${
                isVisible[`section${sectionIndex}`] ? "is-visible" : ""
              }`}
              ref={
                sectionIndex === "1"
                  ? section1Ref
                  : sectionIndex === "2"
                  ? section2Ref
                  : sectionIndex === "3"
                  ? section3Ref
                  : section4Ref
              }
            >
              {project[key].map((section) => {
                switch (section.type) {
                  case "section-text":
                    return (
                      <h2 key={sectionIndex} className="section-text">
                        <span className="italics-section-text">
                          0{sectionIndex}&nbsp;
                        </span>
                        {section.content}
                      </h2>
                    );
                  case "subheading":
                    return (
                      <h2 key={sectionIndex} className="subheading">
                        {section.content}
                      </h2>
                    );
                  case "text":
                    return (
                      <div key={sectionIndex} className="fine-text">
                        {section.content}
                      </div>
                    );
                  case "video":
                    const isYouTube = section.source === "youtube";
                    return (
                      <div className="video-container">
                        <div>
                          {isYouTube ? (
                            <YouTubeVideoComponent section={section} />
                          ) : (
                            <VimeoVideoComponent section={section} />
                          )}
                        </div>
                      </div>
                    );
                  case "list":
                    return (
                      <ul>
                        {Object.keys(section)
                          .filter((key) => key.startsWith("content_list_"))
                          .map((content, idx) => (
                            <li key={idx} className="fine-text">
                              {section[content]}
                            </li>
                          ))}
                      </ul>
                    );
                  case "image":
                    return (
                      <div key={sectionIndex} className="image-container">
                        <img
                          src={images[section.content]}
                          alt={section.image_descript}
                          className="normal-image"
                        />
                        <div className="small-text">
                          {section.image_descript}
                        </div>
                      </div>
                    );
                  case "image-text-h-container-left":
                    return (
                      <div className="section-container">
                        <div className="image-text-container">
                          <div className="flex-text-container">
                            <div className="paragraph">
                              <div className="subheading3">Challenge</div>{" "}
                              <br></br>
                              <div className="small-text">
                                {section.content_stack_1}
                              </div>
                            </div>
                            <div className="paragraph">
                              <div className="subheading3">Solution</div>{" "}
                              <br></br>
                              <div className="small-text">
                                {section.content_stack_2}
                              </div>
                            </div>
                          </div>

                          <div className="flex-image-caption-container">
                            <div className="flex-image-container-h">
                              {Object.keys(section)
                                .filter((key) =>
                                  key.startsWith("image_stack_h_")
                                )
                                .map((imgKey, idx) => (
                                  <img
                                    key={idx}
                                    src={images[section[imgKey]]}
                                    alt={section[imgKey]}
                                    className="normal-image"
                                    style={{
                                      width: `${100 / section.num_images}%`,
                                    }}
                                  />
                                ))}
                            </div>
                            <div className="caption-text">
                              {section.descript_image_stack_h}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  case "image-text-h-container-right":
                    return (
                      <div className="section-container">
                        <div className="image-text-container">
                          <div>
                            <div className="flex-image-container-h">
                              {Object.keys(section)
                                .filter((key) =>
                                  key.startsWith("image_stack_h_")
                                )
                                .map((imgKey, idx) => (
                                  <img
                                    key={idx}
                                    src={images[section[imgKey]]}
                                    alt={section[imgKey]}
                                    className="normal-image"
                                    style={{
                                      width: `${100 / section.num_images}%`,
                                    }}
                                  />
                                ))}
                            </div>
                            <div className="caption-text">
                              {section.descript_image_stack_h}
                            </div>
                          </div>

                          <div className="flex-text-container">
                            <div className="paragraph">
                              <div className="subheading3">Challenge</div>{" "}
                              <br></br>
                              <div className="small-text">
                                {section.content_stack_1}
                              </div>
                            </div>
                            <div className="paragraph">
                              <div className="subheading3">Solution</div>{" "}
                              <br></br>
                              <div className="small-text">
                                {section.content_stack_2}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  case "image-text-v-container":
                    return (
                      <div className="image-text-container">
                        <div className="flex-text-container">
                          <div className="small-text">
                            {section.content_stack_1}
                          </div>
                          <div className="small-text">
                            {section.content_stack_2}
                          </div>
                        </div>
                        <div className="flex-image-container-v">
                          {Object.keys(section)
                            .filter((key) => key.startsWith("image_stack_v_"))
                            .map((imgKey, idx) => (
                              <img
                                key={idx}
                                src={images[section[imgKey]]}
                                alt={section[imgKey]}
                                className="normal-image"
                                style={{
                                  maxWidth: `calc(100% / ${section.num_images})`,
                                }}
                              />
                            ))}
                          <div className="small-text">
                            {section.descript_image_stack_v_}
                          </div>
                        </div>
                      </div>
                    );
                  case "image-stack-h-container":
                    return (
                      <div className="section-container">
                        <div className="flex-image-container-h">
                          {Object.keys(section)
                            .filter((key) => key.startsWith("image_stack_h_"))
                            .map((imgKey, idx) => (
                              <img
                                key={idx}
                                src={images[section[imgKey]]}
                                alt={section[imgKey]}
                                className="normal-image"
                                style={{
                                  maxWidth: `calc(100% / ${section.num_images})`,
                                }}
                              />
                            ))}
                        </div>
                        <div className="small-text">
                          {section.descript_image_stack_h}
                        </div>
                      </div>
                    );
                  case "image-stack-v-container":
                    return (
                      <div className="section-container">
                        <div className="flex-image-container-v">
                          {Object.keys(section)
                            .filter((key) => key.startsWith("image_stack_v_"))
                            .map((imgKey, idx) => (
                              <img
                                key={idx}
                                src={images[section[imgKey]]}
                                alt={section[imgKey]}
                                className="normal-image"
                                style={{
                                  maxHeight: `calc(100% / ${section.num_images})`,
                                }}
                              />
                            ))}
                        </div>
                        <div className="small-text">
                          {section.descript_image_stack_v}
                        </div>
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
    </div>
  );
};

export default ProjectPage;
