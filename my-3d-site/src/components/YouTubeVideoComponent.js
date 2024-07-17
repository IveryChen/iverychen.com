import React from 'react';
import videos from '../videoImports'; 
import './style.css'; 


const YouTubeVideoComponent = ({ section }) => {
  return (
    <div>
      <iframe
        // width="560"
        // height="315"
        src={`https://www.youtube.com/embed/${videos[section.content]}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideoComponent;
