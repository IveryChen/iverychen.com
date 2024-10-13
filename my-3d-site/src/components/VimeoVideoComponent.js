import React from "react";
import videos from "../videoImports";
import "./style.css";

const VimeoVideoComponent = ({ section }) => {
  return (
    <div>
      <iframe
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        height={450}
        src={`https://player.vimeo.com/video/${videos[section.content]}`}
        title="Vimeo video player"
        width={800}
      ></iframe>
    </div>
  );
};

export default VimeoVideoComponent;
