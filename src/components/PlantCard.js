import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [stock, setStock] = useState(true);

  function handleClick() {
    setStock(!stock);
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
