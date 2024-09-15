import styled from "@emotion/styled";
import { map } from "lodash";
import React from "react";
import Measure from "react-measure";

import Box from "../Box";
import VideoPlayer from "./VideoPlayer";
import makePosition from "./makePosition";

const aspectRatio = 16 / 9;
const gap = 16;
const gutter = 16;
const numVideos = 15;
const minVideoWidth = 500;

export default class VideoPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBox: 0,
      dimensions: { width: 0, height: 0 },
    };
  }

  handleResize = (contentRect) => {
    if (contentRect && contentRect.bounds) {
      this.setState({
        dimensions: {
          width: contentRect.bounds.width,
          height: contentRect.bounds.height,
        },
      });
    }
  };
  handleClick = (id) => {
    this.setState({ activeBox: id });
  };

  render() {
    const { videoUrls } = this.props;
    const { dimensions, activeBox } = this.state;
    const { width: screenWidth } = dimensions;

    const { videoWidth, videoHeight, positions } = makePosition({
      aspectRatio,
      gap,
      gutter,
      screenWidth,
      numVideos,
      minVideoWidth,
    });

    return (
      <Measure bounds onResize={this.handleResize}>
        {({ measureRef }) => (
          <Box
            position="relative"
            display="block"
            height="100vh"
            ref={measureRef}
          >
            {map(videoUrls, (url, index) => {
              return (
                <Box
                  display="block"
                  key={index}
                  left={0}
                  position="absolute"
                  top={0}
                  transform={`translate3d(${positions.pos[index]?.x}px, ${positions.pos[index]?.y}px, 0)`}
                  transition="all 0.3s ease"
                >
                  <VideoPlayer
                    height={videoHeight}
                    id={index}
                    isActive={activeBox === index}
                    key={url}
                    onClick={() => this.handleClick(index)}
                    url={url}
                    width={videoWidth}
                  />
                </Box>
              );
            })}
          </Box>
        )}
      </Measure>
    );
  }
}
