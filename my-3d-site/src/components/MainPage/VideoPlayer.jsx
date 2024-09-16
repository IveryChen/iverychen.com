import React from "react";

import Box from "../Box";

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { id, isActive, url, onClick, width, height } = this.props;

    const videoStyle = {
      height: height,
      objectFit: "cover",
      width: width,
    };

    return (
      <Box isActive={isActive} index={id}>
        <video
          autoPlay
          loop
          muted
          onClick={onClick}
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          style={videoStyle}
          type="video/mp4"
        />
      </Box>
    );
  }
}
