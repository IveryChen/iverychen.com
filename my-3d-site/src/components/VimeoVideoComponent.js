import React from 'react';
import videos from '../videoImports'; 
import './style.css'; 

const VimeoVideoComponent = ({ section }) => {
  return (
    <div>
      <iframe
        src={`https://player.vimeo.com/video/${videos[section.content]}`}
        width="560"
        height="315"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Vimeo video player"
      ></iframe>
    </div>
  );
};

export default VimeoVideoComponent;
