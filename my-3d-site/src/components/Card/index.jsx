import styled from "styled-components";
import React from "react";
import rough from "roughjs";

import "./Card.css";

const devicePixelRatio = window.devicePixelRatio || 1;
const height = 144;
const width = 296;

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
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        context.scale(devicePixelRatio, devicePixelRatio);
        const rc = rough.canvas(canvas);

        rc.rectangle(4, 2, width - 4, 146 - 4, {
          roughness: 1,
          strokeWidth: 1.2,
        });
      } else {
        console.error("Failed to get canvas context");
      }
    } else {
      console.error("Canvas element is null");
    }
  }

  render() {
    const { width, height, children } = this.props;

    return (
      <StyledBox
        style={{
          borderRadius: "3px",
          display: "inline-block",
          height: { height },
          position: "relative",
          transition: "transform 0.3s ease",
          width: { width },
        }}
      >
        <canvas ref={this.canvasRef} className="canvas" />
        {children}
      </StyledBox>
    );
  }
}
