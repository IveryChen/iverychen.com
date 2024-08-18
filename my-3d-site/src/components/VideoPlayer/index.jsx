import React from "react";

import "./VideoPlayer.css";

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { url } = this.props;

    return (
      <div className="video-container">
        <video
          autoPlay
          muted
          src={`https://d2skwsfewsc9s1.cloudfront.net/Videos/${url}.mp4`}
          type="video/mp4"
        />
      </div>
    );
  }
}
