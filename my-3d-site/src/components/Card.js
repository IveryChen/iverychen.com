import React from 'react';
import categoryColours from '../categoryColours'; 
// import './Card.css'; 
import { Link } from 'react-router-dom';


function Card({ path, image, eventName, description, categories }) {
  return (
    // <a href={href} className="link">
      <div className="card">
        <Link to={`/project/${path}`}>
        <img src={image} alt={eventName} className="rounded-image" />
        <div className="card-content">
          <p className="event-name">{eventName}</p>
          <div className="description-textbox">
            <p className="description">{description}</p>
          </div>
          <div className="categories">
            {categories.map((category, index) => (
              <div key={index}
              className="category" 
              style={{ backgroundColor: categoryColours[category] || "#FFFFFF" }}>
                <span className="category-text">{category}</span>
              </div>
            ))}
          </div>
        </div>
        </Link>
      </div>
      // </a>
  );
}

export default Card;