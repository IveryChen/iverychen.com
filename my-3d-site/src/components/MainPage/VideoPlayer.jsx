import React from "react";

import Box from "../Box";

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { isActive, url, onClick } = this.props;

    const boxStyle = isActive ? { gridColumn: "1 / 3", gridRow: "1 / 3" } : {};

    return (
      <Box display="grid" style={boxStyle}>
        <video
          autoPlay
          loop
          muted
          onClick={onClick}
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          type="video/mp4"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
}
