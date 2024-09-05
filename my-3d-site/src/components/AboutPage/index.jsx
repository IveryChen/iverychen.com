import styled from "@emotion/styled";
import { map } from "lodash";
import React from "react";

import images from "../../imageImports";

import Box from "../Box";
import Text from "../Text";

const StyledBox = styled(Box)`
  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
  }
`;

const education = [
  ["B.A Computer Science @", "Brown University (2024)"],
  ["B.F.A Film/Animation/Video @", "Rhode Island School of Design (2024)"],
];

const jobs = [
  ["Associate Software Engineer @", "Tesla"],
  ["Research Engineer @", "Brown HCI"],
  ["UX Engineering Intern @", "BMW"],
  ["Technical Director Intern @", "Pixar"],
  ["VR Software Engineering Intern @", "Bayer"],
  ["AR Developer @", "NASA"],
];

export default class AboutPage extends React.PureComponent {
  render() {
    return (
      <Box>
        <Box
          borderBottom="1px solid black"
          display="grid"
          gridTemplateColumns="1fr 1fr"
          justifyContent="center"
        >
          <Box aspectRatio={1} borderRight="1px solid black" width="680px">
            <img
              height="100%"
              width="100%"
              objectFit="contain"
              src={images["ivery"]}
              alt="Ivery's profile pic"
            />
          </Box>
          <Box display="flex" p="14px">
            <Text fontWeight={500} textAlign="start">
              Hi! My name is Ivery and I'm a fullstack software engineer, tech
              artist, 3D animator, and ARVR/Graphics Unity Developer. I love
              creative tools, ARVR, and anything 3D + Interactive. I also do
              fashion photography, make animated films, watch movies, work out
              and eat good Chinese food.
            </Text>
          </Box>
          {/* <StyledBox
            alignItems="center"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            maxWidth="75%"
            padding="30px"
          > */}
          {/* </StyledBox> */}
        </Box>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          maxWidth="75%"
          padding="30px"
        >
          <Box paddingLeft="10%" paddingRight="10%">
            <Box alignItems="left" paddingBottom="20px" textAlign="left">
              <Box display="grid" gap="8px">
                <Text
                  fontStyle="bold"
                  fontSize="24px"
                  fontWeight={500}
                  textAlign="left"
                >
                  Education
                </Text>
                {map(education, ([degree, school]) => {
                  return (
                    <Box display="flex">
                      <Text
                        fontStyle="italic"
                        fontWeight={500}
                        textAlign="left"
                      >
                        {degree}
                      </Text>
                      <Text fontWeight={700}>{school}</Text>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box alignItems="left" paddingBottom="20px" textAlign="left">
              <Box display="grid" gap="8px">
                <Text
                  fontStyle="bold"
                  fontSize="24px"
                  fontWeight={500}
                  textAlign="left"
                >
                  Work
                </Text>
                {map(jobs, ([title, company]) => {
                  return (
                    <Box display="flex">
                      <Text
                        fontStyle="italic"
                        fontWeight={500}
                        textAlign="left"
                      >
                        {title}
                      </Text>
                      <Text fontWeight={700}>{company}</Text>
                    </Box>
                  );
                })}
              </Box>
            </Box>
            <Box alignItems="left" paddingBottom="20px" textAlign="left">
              <Box display="grid" gap="8px">
                <Text
                  fontStyle="bold"
                  fontSize="24px"
                  fontWeight={500}
                  textAlign="left"
                >
                  Skills
                </Text>
                <Text fontStyle="italic" fontWeight={500} textAlign="left">
                  <Text fontWeight={700} fontStyle="bold">
                    Code:
                  </Text>
                  C#, C++, Python, OpenCV, JavaScript, Scala, Three.js, React,
                  HTML, CSS, Git, WebGL, GLSL, SQL, AFrame, Qt, Linux
                </Text>
                <Text fontStyle="italic" fontWeight={500} textAlign="left">
                  <Text fontWeight={700} fontStyle="bold">
                    Tools:
                  </Text>
                  Figma, Unity, Blender, Maya, Houdini, Nuke, Katana, Arnold,
                  Substance Painter, Motion Capture, Marvellous Designer, C4D,
                  Max MSP, ROS, Adobe Suite(Premiere Pro, AfterEffects,
                  Photoshop, Illustrator, Audition, Animator), DaVinci Resolve,
                  Arduino
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>

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
      </Box>
    );
  }
}
