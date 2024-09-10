import styled from "@emotion/styled";
import React from "react";

import Box from "../Box";

const StyledBox = styled(Box)`
  display: grid;
  position: absolute;

  width: calc(33.33vw - 1vw);
  height: calc((33.33vw - 1vw) * (9 / 16));

  left: ${({ index }) => `calc(${(index % 3) * 33.33 + 1}vw)`};
  top: ${({ index }) =>
    `calc(${Math.floor(index / 3) * ((33.33 - 1) * (9 / 16) + 1) + 1}vw)`};

  aspect-ratio: 16 / 9;
  transition: all 0.3s ease;
  box-sizing: border-box;
`;

// ${({ isActive }) =>
//   isActive &&
//   `
//     grid-column: 1 / 3;
//     grid-row: 1 / 3;
//   `}
// @media (max-width: 1133px) {
//   ${({ isActive }) =>
//     isActive &&
//     `
//       grid-column: auto;
//       grid-row: auto;

//     `}
// }

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { id, isActive, url, onClick } = this.props;

    const videoStyle = {
      height: "100%",
      objectFit: "cover",
      width: "100%",
    };

    return (
      <StyledBox isActive={isActive} index={id}>
        <video
          autoPlay
          loop
          muted
          onClick={onClick}
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          style={videoStyle}
          type="video/mp4"
        />
      </StyledBox>
    );
  }
}
