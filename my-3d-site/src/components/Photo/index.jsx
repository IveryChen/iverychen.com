import styled from "@emotion/styled";
import React from "react";
import { map } from "lodash";

import Box from "../Box";

const images = [
  ["ariel.jpeg", true],
  ["scarlet.jpeg", true],
  ["yufan.jpg", true],
  ["mami8.jpg"],
  ["mami9.jpeg"],
  ["cake2.jpg"],
  ["mami7.jpg"],
  ["mami4.jpg"],
  ["nikki.jpeg"],
  //   ["cake1.jpg"],
  ["bolex2.png"],
  // ["bolex3.png"],
  ["bolex4.png"],
  ["mami5.jpg"],
  //   ["mami3.jpg"],
  //   ["mami6.jpg", true],
  //   ["glory1.jpg", true],
  //   ["glory3.jpg", true],
  //   ["glory2.jpg"],

  ["china2.jpg"],
  ["china3.jpg"],
  ["china1.jpg"],
  ["mami2.jpg"],
  ["yearbook1.jpg"],
  ["yearbook2.jpg"],
];

const StyledBox = styled(Box)`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

export default class Photo extends React.PureComponent {
  render() {
    return (
      <StyledBox display="grid" gap="16px" p="16px">
        {map(images, ([image, isVertical], index) => (
          <Box alignContent="center" key={index} overflow="hidden">
            <img
              alt={image}
              style={{
                aspectRatio: isVertical ? "9/16" : "16/9",
                objectFit: "contain",
                objectFit: "cover",
                width: "100%",
              }}
              src={`https://d2skwsfewsc9s1.cloudfront.net/Photography/${image}`}
            />
          </Box>
        ))}
      </StyledBox>
    );
  }
}
