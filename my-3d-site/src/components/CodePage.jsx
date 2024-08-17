import Card from "./Card";
import React from "react";
import jsonData from "../data";
import images from "../imageImports";
import { Link } from "react-router-dom";

const CodePage = () => {
  return (
    <div className="main-page">
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
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CodePage;
