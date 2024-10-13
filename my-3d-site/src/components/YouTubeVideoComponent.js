import React from "react";
import videos from "../videoImports";
import "./style.css";

const YouTubeVideoComponent = ({ section }) => {
  return (
    <div>
      <iframe
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        height={450}
        src={`https://www.youtube.com/embed/${videos[section.content]}`}
        title="YouTube video player"
        width={800}
      ></iframe>
    </div>
  );
};

export default YouTubeVideoComponent;
