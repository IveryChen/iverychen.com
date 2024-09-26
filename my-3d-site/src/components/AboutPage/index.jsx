import styled from "@emotion/styled";
import { animated } from "@react-spring/web";
import { map } from "lodash";
import React from "react";

import images from "../../imageImports";

import Box from "../Box";
import Text from "../Text";

const StyledImageBox = styled(Box)`
  min-height: 30vh;

  @media (min-width: 768px) {
    min-height: 92vh;
  }
`;

const StyledSection = styled(Box)`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StyledSectionBox = styled(Box)`
  transition: all 0.3s ease;

  &:hover {
    background: #f0f332;
    color: black;
  }
`;

const introduction = [
  [
    "My name is Ivery and I'm a full-stack software engineer, tech artist, 3D animator, and ARVR/Graphics Unity Developer.",
  ],
  [" I love creative tools, ARVR, and anything 3D + Interactive."],
  [
    " I also do fashion photography, make animated films, watch movies, work out and eat good Chinese food.",
  ],
];

const education = [
  ["B.A Computer Science @ Brown University (2024)"],
  ["B.F.A Film/Animation/Video @ Rhode Island School of Design (2024)"],
];

const work = [
  ["Associate Software Engineer @ Tesla"],
  ["Research Engineer @ Brown HCI"],
  ["Technical Director Intern @ Pixar"],
  ["VR Software Engineering Intern @ Bayer"],
  ["AR Developer @ NASA"],
];

const skills = [
  [
    "C#, C++, Python, OpenCV, JavaScript, Scala, Three.js, React, HTML, CSS, Git, WebGL, GLSL, SQL, AFrame, Qt, Linux",
  ],
  [
    " Figma, Unity, Blender, Maya, Houdini, Nuke, Katana, Substance Painter, Adobe Suite (PR, AE, PS, AI, AU), Arduino",
  ],
];

const config = [
  ["01 — INTRODUCTION", "introduction", introduction],
  ["02 — EDUCATION", "education", education],
  ["03 — WORK", "work", work],
  ["04 — SKILLS", "skills", skills],
];

export default class AboutPage extends React.PureComponent {
  state = { expandedSection: null, hoverExpandedSection: null };

  onHoverEnterSection = (section) => {
    this.setState({ hoverExpandedSection: section });
  };

  onHoverLeaveSection = () => this.setState({ hoverExpandedSection: null });

  toggleSection = (section) => {
    this.setState((state) => ({
      expandedSection: state.expandedSection === section ? null : section,
    }));
  };

  render() {
    const { expandedSection, hoverExpandedSection } = this.state;

    console.log(expandedSection, hoverExpandedSection);

    const animationStyle = (isOpen) => ({
      height: isOpen ? "auto" : "0",
      opacity: isOpen ? 1 : 0,
      overflow: "hidden",
      transition: "height 0.5s ease, opacity 0.5s ease",
    });

    return (
      <>
        <StyledSection>
          <StyledSection borderBottom="1px solid black">
            <StyledImageBox
              borderRight="1px solid black"
              position="relative"
              width="100vw"
            >
              <img
                alt="Ivery's profile pic"
                style={{
                  height: "100%",
                  left: 0,
                  objectFit: "cover",
                  position: "absolute",
                  top: 0,
                  width: "100%",
                }}
                src={images["ivery"]}
              />
            </StyledImageBox>
          </StyledSection>
          <Box>
            {map(config, ([title, type, data], index) => (
              <StyledSectionBox
                borderBottom="1px solid black"
                display="flex"
                color="dimgray"
                flexDirection="column"
                key={type}
                onClick={() => this.toggleSection(type)}
                onMouseEnter={() => this.onHoverEnterSection(type)}
                onMouseLeave={this.onHoverLeaveSection}
                p="14px"
              >
                <Text
                  color="inherit"
                  fontWeight={500}
                  fontSize={24}
                  textAlign="left"
                  width={1600}
                >
                  {title}
                </Text>
                <animated.div
                  style={animationStyle(
                    expandedSection === type || hoverExpandedSection === type
                  )}
                >
                  {(expandedSection === type ||
                    hoverExpandedSection === type) && (
                    <Box display="grid" py="10px">
                      {map(data, ([d]) => (
                        <Text
                          fontStyle="italic"
                          fontWeight={500}
                          lineHeight={2}
                          textAlign="left"
                        >
                          {d}
                        </Text>
                      ))}
                    </Box>
                  )}
                </animated.div>
              </StyledSectionBox>
            ))}
          </Box>
        </StyledSection>
        <img
          src={images["smiley_balloon"]}
          alt={"smiley balloon"}
          style={{
            borderRadius: "inherit",
            height: "auto",
            maxWidth: "80%",
            padding: "7px",
            transition: "filter 0.3s ease-out",
          }}
        />
      </>
    );
  }
}
