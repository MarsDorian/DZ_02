import React from "react";

const Card = ({ name, image }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Card;
