import styled from "@emotion/styled";
import React from "react";

import { compose, system, typography } from "styled-system";

import Box from "../Box";

const textDecoration = system({ textDecoration: true });
const textOverflow = system({ textOverflow: true });
const textTransform = system({ textTransform: true });
const whiteSpace = system({ whiteSpace: true });
const wordBreak = system({ wordBreak: true });

const truncateProps = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

const Text = styled(Box)(
  compose(
    textDecoration,
    textOverflow,
    textTransform,
    typography,
    whiteSpace,
    wordBreak
  ),
  (props) => props.truncate && truncateProps
);

function render(props, ref) {
  return (
    <Text
      color="gray.0"
      fontFamily="sansSerif"
      fontSize="md"
      lineHeight="md"
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(render);
