import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

import jsonData from "../../data";
import categoryColours from "../../categoryColours";
import images from "../../imageImports";
import Card from "../../components/Card";

import Box from "../Box";
import Text from "../Text";

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
                        <Box
                          key={index}
                          alignItems="center"
                          borderColor="#514f59"
                          borderRadius="2px"
                          boxShadow="inset 0 0 0 1px #514f59"
                          display="inline-flex"
                          lineHeight="30px"
                          className="category"
                          backgroundColor={
                            categoryColours[category] || "#FFFFFF"
                          }
                        >
                          <Text fontSize="10px" padding="4px">
                            {category}
                          </Text>
                        </Box>
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
