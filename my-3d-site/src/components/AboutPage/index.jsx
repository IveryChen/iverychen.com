import styled from "@emotion/styled";
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

const education = [
  ["B.A Computer Science @ Brown University (2024)"],
  ["B.F.A Film/Animation/Video @ Rhode Island School of Design (2024)"],
];

const jobs = [
  ["Associate Software Engineer @ Tesla"],
  ["Research Engineer @ Brown HCI"],
  ["Technical Director Intern @ Pixar"],
  ["VR Software Engineering Intern @ Bayer"],
  ["AR Developer @ NASA"],
];

export default class AboutPage extends React.PureComponent {
  render() {
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
            <Box
              borderBottom="1px solid black"
              display="flex"
              flexDirection="column"
              gap="8px"
              p="14px"
            >
              <Text fontWeight={500} textAlign="left">
                ① My name is Ivery and I'm a full-stack software engineer, tech
                artist, 3D animator, and ARVR/Graphics Unity Developer.
              </Text>
              <Text fontWeight={500} textAlign="left">
                ② I love creative tools, ARVR, and anything 3D + Interactive.
              </Text>
              <Text fontWeight={500} textAlign="left">
                ③ I also do fashion photography, make animated films, watch
                movies, work out and eat good Chinese food.
              </Text>
            </Box>
            <Box
              borderBottom="1px solid black"
              display="flex"
              flexDirection="column"
              gap="8px"
              p="14px"
            >
              <Text fontStyle="bold" fontWeight={500} textAlign="left">
                ④ Education
              </Text>
              {map(education, ([degree]) => {
                return (
                  <Text fontStyle="italic" fontWeight={500} textAlign="left">
                    {degree}
                  </Text>
                );
              })}
            </Box>
            <Box
              borderBottom="1px solid black"
              display="flex"
              flexDirection="column"
              gap="8px"
              p="14px"
            >
              <Text fontStyle="bold" fontWeight={500} textAlign="left">
                ⑤ Work
              </Text>
              {map(jobs, ([company]) => {
                return (
                  <Text fontStyle="italic" fontWeight={500} textAlign="left">
                    {company}
                  </Text>
                );
              })}
            </Box>
            <Box
              borderBottom="1px solid black"
              display="flex"
              flexDirection="column"
              gap="8px"
              p="14px"
            >
              <Box display="grid" gap="8px">
                <Text fontStyle="bold" fontWeight={500} textAlign="left">
                  ⑥ Skills
                </Text>
                <Text fontStyle="italic" fontWeight={500} textAlign="left">
                  C#, C++, Python, OpenCV, JavaScript, Scala, Three.js, React,
                  HTML, CSS, Git, WebGL, GLSL, SQL, AFrame, Qt, Linux
                </Text>
                <Text fontStyle="italic" fontWeight={500} textAlign="left">
                  Figma, Unity, Blender, Maya, Houdini, Nuke, Katana, Arnold,
                  Substance Painter, Motion Capture, Marvellous Designer, C4D,
                  Max MSP, ROS, Adobe Suite(Premiere Pro, AfterEffects,
                  Photoshop, Illustrator, Audition, Animator), Arduino
                </Text>
              </Box>
            </Box>
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
