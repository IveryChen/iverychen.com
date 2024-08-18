import React from "react";

import "./VideoPlayer.css";

export default class VideoPlayer extends React.PureComponent {
  render() {
    const { url } = this.props;

    return (
      <div className="video-container">
        <div className="video" controls>
          <video src={url} type="video/mp4" />
        </div>
      </div>
    );
  }
}
