import React from "react";

import VideoLoader from "./VideoLoader";

const videoUrls = [
  "Monday_meatshop",
  "Monday_clothes",
  "Monday_raccoon",
  "Monday_duck_2",
  "Marathon_ring",
  "Monday_garden",
  "Monday_garden_2",
  "Monday_subway_2",
  "Marathon_switch",
  "Marathon_surprise",
  "Monday_corridor_2",
  "Monday_bus_1",
  "Monday_kid",
  "Marathon_threesteps",
  "Marathon_rock",
];

export default class MainPage extends React.PureComponent {
  render() {
    return <VideoLoader videoUrls={videoUrls} />;
  }
}
