import React from "react";
import rough from "roughjs";

import "./Card.css";

const devicePixelRatio = window.devicePixelRatio || 1;
const height = 144;
const width = 296;

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
    const { children } = this.props;

    return (
      <div className="card-wrapper">
        <canvas ref={this.canvasRef} className="canvas" />
        {children}
      </div>
    );
  }
}
