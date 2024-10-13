import React from "react";
import videos from "../videoImports";
import "./style.css";

const VimeoVideoComponent = ({ section }) => {
  return (
    <div height="100%" width="100%">
      <iframe
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height="100%"
        src={`https://player.vimeo.com/video/${videos[section.content]}`}
        title="Vimeo video player"
        width="100%"
      ></iframe>
    </div>
  );
};

export default VimeoVideoComponent;
