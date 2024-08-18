import { map } from "lodash";
import React from "react";

import VideoPlayer from "../../components/VideoPlayer";
import "./MainPage.css";

const config = [
  "Monday_meatshop",
  "Monday_clothes",
  "Monday_raccoon",
  "Monday_duck_2",

  "Marathon_ring",
  "Monday_garden",
  "Marathon_surprise",
  "Monday_subway_2",

  "Marathon_switch",
  "Monday_garden_2",
  "Monday_corridor_2",
  "Marathon_threesteps",
  "Marathon_rock",
  "Monday_kid",
  "Monday_bus_1",
  // "Monday_subway_1",
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
