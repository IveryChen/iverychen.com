import styled from "@emotion/styled";
import React from "react";

import Box from "../Box";

const StyledBox = styled(Box)`
  position: relative;
  display: grid;
  transition: all 0.8s ease;

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
      objectFit: "cover",
    };

    return (
      <StyledBox isActive={isActive}>
        <video
          autoPlay
          height="100%"
          loop
          muted
          onClick={onClick}
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          style={videoStyle}
          type="video/mp4"
          width="100%"
        />
      </StyledBox>
    );
  }
}
