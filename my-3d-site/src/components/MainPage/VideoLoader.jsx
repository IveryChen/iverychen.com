import { map } from "lodash";
import React, { useState, useEffect, useRef } from "react";

import VideoPlayer from "./VideoPlayer";
import "./VideoLoader.css";

const VideoLoader = ({ videoUrls }) => {
  return (
    <div className="video-progress">
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <div className="all-videos">
        {map(videoUrls, (url) => (
          <VideoPlayer key={url} url={url} />
        ))}
      </div>
    </div>
  );
};

export default VideoLoader;
