import styled from "@emotion/styled";
import { map } from "lodash";

import Box from "../Box";
import VideoPlayer from "./VideoPlayer";

const VideoLoader = ({ videoUrls }) => {
  return (
    <Box height="auto" overflowY="hidden" position="relative" width="100vw">
      <Box
        display="grid"
        gap="20px"
        gridTemplateColumns="repeat(auto-fill, minmax(500px, 1fr))"
        overflow-y="hidden"
        padding="16px"
      >
        {map(videoUrls, (url) => (
          <VideoPlayer key={url} url={url} />
        ))}
      </Box>
    </Box>
  );
};

export default VideoLoader;
