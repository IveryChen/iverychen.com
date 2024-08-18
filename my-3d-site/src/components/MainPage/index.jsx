import { map } from "lodash";
import React from "react";

import VideoPlayer from "../../components/VideoPlayer";
import "./MainPage.css";

const config = [
  "Marathon_ring",
  "Marathon_rock",
  "Marathon_surprise",
  "Marathon_switch",
  "Monday_bus_1",
  "Monday_corridor_2",
  "Marathon_threesteps",
  "Monday_duck_2",
  "Monday_garden",
  "Monday_garden_2",
  "Monday_kid",
  "Monday_clothes",
  "Monday_meatshop",
  "Monday_raccoon",
  // "Monday_subway_1",
  "Monday_subway_2",
];

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
