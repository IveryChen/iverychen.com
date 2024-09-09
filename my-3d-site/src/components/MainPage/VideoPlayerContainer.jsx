import styled from "@emotion/styled";
import { map } from "lodash";
import React from "react";

import Box from "../Box";
import VideoPlayer from "./VideoPlayer";

const StyledBox = styled(Box)`
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

export default class VideoPlayerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBox: 0,
    };
  }

  handleClick = (id) => {
    this.setState({ activeBox: id });
  };

  render() {
    const { videoUrls } = this.props;

    return (
      <Box height="auto" overflowY="hidden" position="relative" width="100vw">
        <StyledBox display="grid" gap="20px" overflow-y="hidden" padding="16px">
          {map(videoUrls, (url, index) => {
            return (
              <VideoPlayer
                id={index}
                isActive={this.state.activeBox === index}
                key={url}
                onClick={() => this.handleClick(index)}
                url={url}
              />
            );
          })}
        </StyledBox>
      </Box>
    );
  }
}
