import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

import categoryColours from "../../categoryColours";
import RoundedImage from "./RoundedImage";

const StyledRoundedImage = styled(RoundedImage)`
  @media (min-width: 768px) {
    height: auto;
    margin-bottom: 10px;
  }
`;

export default class Card extends React.PureComponent {
  render() {
    const { path, image, eventName, description, categories } = this.props;

    return (
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
    );
  }
}