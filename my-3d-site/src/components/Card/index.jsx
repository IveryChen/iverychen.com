import styled from "styled-components";
import React from "react";
import rough from "roughjs";

import "./Card.css";

const StyledBox = styled.div`
  @media (min-width: 768px) {
    height: 440px;
    margin: 20px;
    width: 436px;
  }

  &:hover {
    transform: translate(5px, -5px);
  }
`;

export default class Card extends React.PureComponent {
  render() {
    const { width, height, children } = this.props;

    return (
      <StyledBox
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "black",
          backgroundColor: "white",
          display: "inline-block",
          height: { height },
          position: "relative",
          transition: "transform 0.3s ease",
          width: { width },
        }}
      >
        {children}
      </StyledBox>
    );
  }
}
