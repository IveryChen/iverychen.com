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
  ["nikki.jpeg"],
  ["mami4.jpg"],
  //   ["cake1.jpg"],
  ["bolex2.png"],
  // ["bolex3.png"],
  ["mami5.jpg"],
  ["bolex4.png"],
  ["mami3.jpg"],
  //   ["mami6.jpg", true],
  //   ["glory1.jpg", true],
  //   ["glory3.jpg", true],
  ["glory2.jpg"],
  ["mami2.jpg"],

  ["yearbook1.jpg"],
  ["yearbook2.jpg"],
  ["china1.jpg"],
  ["china2.jpg"],
  ["china3.jpg"],
];

export default class Photo extends React.PureComponent {
  render() {
    return (
      <Box
        display="grid"
        gap="24px"
        gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        p="24px"
      >
        {map(images, ([image, isVertical], index) => (
          <Box alignContent="center" key={index} overflow="hidden">
            <img
              alt={image}
              style={{
                // height: "auto",
                aspectRatio: isVertical ? "9/16" : "16/9",
                objectFit: "contain",
                objectFit: "cover",
                width: "100%",
              }}
              src={`https://d2skwsfewsc9s1.cloudfront.net/Photography/${image}`}
            />
          </Box>
        ))}
      </Box>
    );
  }
}
