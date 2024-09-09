import styled from "@emotion/styled";
import { map } from "lodash";

import Box from "../Box";
import VideoPlayer from "./VideoPlayer";

const StyledBox = styled(Box)`
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  }
`;

const VideoLoader = ({ videoUrls }) => {
  return (
    <Box height="auto" overflowY="hidden" position="relative" width="100vw">
      <StyledBox
        display="grid"
        gap="20px"
        gridTemplateColumns="repeat(auto-fill, minmax(320px, 1fr))"
        overflow-y="hidden"
        padding="16px"
      >
        {map(videoUrls, (url) => (
          <VideoPlayer key={url} url={url} />
        ))}
      </StyledBox>
    </Box>
  );
};

export default VideoLoader;
