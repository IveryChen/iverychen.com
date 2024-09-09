import styled from "@emotion/styled";
import React from "react";

import Box from "../Box";

const StyledBox = styled(Box)`
  display: grid;
  position: relative;

  ${({ isActive }) =>
    isActive &&
    `
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    `}

  @media (max-width: 1133px) {
    ${({ isActive }) =>
      isActive &&
      `
        grid-column: auto;
        grid-row: auto;

      `}
  }
`;

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { isActive, url, onClick } = this.props;

    const videoStyle = {
      height: "100%",
      objectFit: "cover",
      width: "100%",
    };

    return (
      <StyledBox isActive={isActive}>
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
