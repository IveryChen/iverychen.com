import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

import jsonData from "../../data";
import categoryColours from "../../categoryColours";
import images from "../../imageImports";
import Card from "../../components/Card";

import "./CodePage.css";
import RoundedImage from "./RoundedImage";

const StyledRoundedImage = styled(RoundedImage)`
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
const CodePage = () => {
  return (
    <>
      <div className="filter-bar">
        <div id="selected-work">SELECTED WORK</div>
      </div>
      <div className="cards">
        {jsonData.map((item, index) => (
          <Link to={`/project/${item.path}`} key={item.id}>
            <Card
              key={index}
              path={item.path}
              image={images[item.image]}
              eventName={item.eventName}
              description={item.description}
              categories={item.categories}
            >
              <div className="card">
                <Link to={`/project/${item.path}`}>
                  <StyledRoundedImage
                    image={images[item.image]}
                    eventName={item.eventName}
                    width="100%"
                    height="220px"
                    border="1.5px"
                    borderstyle="solid"
                    bordercolor="black"
                  />
                  <div className="card-content">
                    <div className="event-name">{item.eventName}</div>
                    <div className="description-textbox">
                      <div className="description">{item.description}</div>
                    </div>
                    <div className="categories">
                      {item.categories.map((category, index) => (
                        <div
                          key={index}
                          className="category"
                          style={{
                            backgroundColor:
                              categoryColours[category] || "#FFFFFF",
                          }}
                        >
                          <span className="category-text">{category}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
};

export default CodePage;
