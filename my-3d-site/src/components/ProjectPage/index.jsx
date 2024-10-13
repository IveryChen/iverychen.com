import styled from "@emotion/styled";
import { map } from "lodash";
import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";

import jsonData from "../../data";
import images from "../../imageImports";

import Box from "../Box";
import Text from "../Text";
import VimeoVideoComponent from "../VimeoVideoComponent";
import YouTubeVideoComponent from "../YouTubeVideoComponent";

const StyledTitleImage = styled(Box)`
  &:hover {
    .title-image {
      filter: blur(5px);
    }

    .image-overlay {
      opacity: 1;
    }
  }
`;

const ProjectPage = () => {
  const { projectName } = useParams();
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
    window.scrollTo(0, 0);

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

  const extraInfo = [
    { label: "Team", value: project.team },
    { label: "Role", value: project.role },
    { label: "Tools", value: project.tools },
  ];

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box alignItems="center" display="flex" flexDirection="column">
        <h1>{project.title}</h1>
        <Text
          alignSelf="center"
          color="black"
          fontStyle="italic"
          fontWeight="700"
          textAlign="center"
        >
          {project.duration}, {project.time}
        </Text>
        <StyledTitleImage
          alignItems="center"
          borderRadius="20px"
          display="flex"
          flexDirection="column"
          height="40%"
          justifyContent="center"
          maxWidth="1000px"
          minWidth="420px"
          overflow="hidden"
          width="100%"
        >
          <img
            alt={project.eventName}
            className="title-image"
            src={images[project.image]}
            style={{
              borderRadius: "inherit",
              height: "auto",
              maxWidth: "80%",
              padding: "7px",
              transition: "filter 0.3s ease-out",
            }}
          />
          <Box
            className="image-overlay"
            opacity="0"
            position="absolute"
            textAlign="center"
            transition="opacity 0.3s ease-out"
          >
            <Text
              alignItems="left"
              backgroundClip="text"
              backgroundOmage="linear-gradient(to right, #ffffff, #ffffff)"
              className="overlay-text"
              color="white"
              fontSize="28px"
              fontStyle="normal"
              fontWeight="800"
              margin="10px"
              textAlign="left"
              WebkitBackgroundClip="text"
              href={project.deployed}
              rel="noopener noreferrer"
              target="_blank"
            >
              {project.title.toLowerCase()} ↗
            </Text>
          </Box>
        </StyledTitleImage>
        <Box
          alignItems="flex-start"
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          maxWidth="80%"
          minWidth="40vw"
          padding="20px"
        >
          {map(extraInfo, (info, index) => (
            <Text
              key={index}
              alignSelf="center"
              color="black"
              fontStyle="italic"
              fontWeight="700"
              textAlign="center"
            >
              {info.label}:{" "}
              <Text fontWeight={400} padding="10px">
                {info.value}
              </Text>
            </Text>
          ))}
        </Box>
      </Box>

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
                        <Text
                          alignSelf="center"
                          color="black"
                          fontStyle="italic"
                          fontWeight="700"
                          textAlign="center"
                        >
                          0{sectionIndex}&nbsp;
                        </Text>
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
                      <Box
                        alignItems="center"
                        borderRadius="5px"
                        display="flex"
                        flexDirection="column"
                        height="auto"
                        justifyContent="center"
                        minWidth="400px"
                        overflow="hidden"
                        width="auto"
                      >
                        <div>
                          {isYouTube ? (
                            <YouTubeVideoComponent section={section} />
                          ) : (
                            <VimeoVideoComponent section={section} />
                          )}
                        </div>
                      </Box>
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
    </Box>
  );
};

export default ProjectPage;
