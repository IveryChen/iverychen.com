import { map } from "lodash";
import React from "react";

import VideoPlayer from "../../components/VideoPlayer";
import "./MainPage.css";

const config = ["https://d2skwsfewsc9s1.cloudfront.net/Monday_raccoon.mp4"];

export default class MainPage extends React.PureComponent {
  render() {
    return (
      <div className="all-videos">
        {map(config, (url) => (
          <VideoPlayer key={url} url={url} />
        ))}
      </div>
    );
  }
}
