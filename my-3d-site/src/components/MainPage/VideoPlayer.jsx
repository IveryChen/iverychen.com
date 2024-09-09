import React from "react";

import Box from "../Box";

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { url } = this.props;

    return (
      <Box display="flex">
        <video
          autoPlay
          loop
          muted
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          type="video/mp4"
          width="100%"
          height="100%"
        />
      </Box>
    );
  }
}
