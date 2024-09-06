import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";

import jsonData from "../../data";
import categoryColours from "../../categoryColours";
import images from "../../imageImports";
import Card from "../../components/Card";

import Box from "../Box";
import Text from "../Text";

import RoundedImage from "./RoundedImage";

const StyledRoundedImage = styled(RoundedImage)`
  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

const StyledBox = styled(Box)`
  @media (min-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

const CodePage = () => {
  return (
    <Box display="flex" padding="30px">
      <Box display="flex" flexWrap="wrap" gap="30px" justifyContent="center">
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
              <StyledBox
                padding="12px"
                transition="transform 0.3s ease"
                width="320px"
                height="340px"
              >
                <Link to={`/project/${item.path}`}>
                  <StyledRoundedImage
                    border="1.5px"
                    bordercolor="black"
                    borderstyle="solid"
                    eventName={item.eventName}
                    height="60%"
                    image={images[item.image]}
                    position="relative"
                    width="100%"
                  />
                  <div className="card-content">
                    <div className="event-name">{item.eventName}</div>
                    <div className="description-textbox">
                      <div className="description">{item.description}</div>
                    </div>
                    <div className="categories">
                      {item.categories.map((category, index) => (
                        <Box
                          alignItems="center"
                          backgroundColor={
                            categoryColours[category] || "#FFFFFF"
                          }
                          borderColor="#514f59"
                          borderRadius="6px"
                          boxShadow="inset 0 0 0 1px #514f59"
                          className="category"
                          display="inline-flex"
                          key={index}
                          lineHeight="30px"
                        >
                          <Text fontSize="10px" padding="4px">
                            {category}
                          </Text>
                        </Box>
                      ))}
                    </div>
                  </div>
                </Link>
              </StyledBox>
            </Card>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default CodePage;
