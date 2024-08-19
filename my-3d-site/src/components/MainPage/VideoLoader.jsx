import { map } from "lodash";
import React, { useState, useEffect, useRef } from "react";

import VideoPlayer from "./VideoPlayer";
import "./VideoLoader.css";

const VideoLoader = ({ videoUrls }) => {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const totalVideos = videoUrls.length;
  const loadedVideos = useRef(0);

  useEffect(() => {
    if (totalVideos === 0) {
      setLoadingProgress(100);
      setIsLoading(false);
      return;
    }

    const handleLoadedData = () => {
      loadedVideos.current += 1;
      const progress = (loadedVideos.current / totalVideos) * 100;
      setLoadingProgress(progress);

      if (loadedVideos.current === totalVideos) {
        setIsLoading(false);
      }
    };

    const videoElements = document.querySelectorAll(".video");
    videoElements.forEach((video) => {
      video.addEventListener("loadeddata", handleLoadedData);
    });

    return () => {
      videoElements.forEach((video) => {
        video.removeEventListener("loadeddata", handleLoadedData);
      });
    };
  }, [totalVideos]);

  return (
    <div>
      {isLoading && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${loadingProgress}%` }}
          ></div>
        </div>
      )}
      <div className="all-videos">
        {map(videoUrls, (url) => (
          <VideoPlayer key={url} url={url} />
        ))}
      </div>
    </div>
  );
};

export default VideoLoader;
