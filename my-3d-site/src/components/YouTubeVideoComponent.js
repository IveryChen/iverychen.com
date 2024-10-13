import React from "react";
import videos from "../videoImports";
import "./style.css";

const YouTubeVideoComponent = ({ section }) => {
  return (
    <div height="100%" width="100%">
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        height="100%"
        src={`https://www.youtube.com/embed/${videos[section.content]}`}
        title="YouTube video player"
        width="100%"
      ></iframe>
    </div>
  );
};

export default YouTubeVideoComponent;
