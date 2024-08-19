import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import rough from "roughjs";

import categoryColours from "../../categoryColours";
import RoundedImage from "./RoundedImage";
import "./Card.css";

const StyledRoundedImage = styled(RoundedImage)`
  @media (min-width: 768px) {
    height: auto;
    margin-bottom: 10px;
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
        const rc = rough.canvas(canvas);

        rc.rectangle(1, 1, 296, 146, {
          roughness: 2,
          strokeWidth: 0.8,
        });
      } else {
        console.error("Failed to get canvas context");
      }
    } else {
      console.error("Canvas element is null");
    }
  }

  render() {
    const { path, image, eventName, description, categories } = this.props;

    return (
      <div className="card-wrapper">
        <canvas ref={this.canvasRef} className="canvas" />
        <div className="card">
          <Link to={`/project/${path}`}>
            <StyledRoundedImage
              image={image}
              eventName={eventName}
              width="100%"
              height="65%"
              border="1.5px"
              borderstyle="solid"
              bordercolor="black"
            />
            <div className="card-content">
              <div className="event-name">{eventName}</div>
              <div className="description-textbox">
                <div className="description">{description}</div>
              </div>
              <div className="categories">
                {categories.map((category, index) => (
                  <div
                    key={index}
                    className="category"
                    style={{
                      backgroundColor: categoryColours[category] || "#FFFFFF",
                    }}
                  >
                    <span className="category-text">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
