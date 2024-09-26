import styled from "styled-components";
import React from "react";
import rough from "roughjs";

import "./Card.css";

const StyledBox = styled.div`
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    height: 440px;
    margin: 20px;
    width: 436px;
  }

  &:hover {
    box-shadow: -16px 16px black;
    transform: translate(8px, -8px);
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
