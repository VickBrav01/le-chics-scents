import React from "react";
import "./Card.css";

function Card(product) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={product.image} alt={product.name} className="card-image" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.ProductName}</h3>
        <p className="card-description">{product.Description}</p>
        <div className="card-details">
          <span className="card-price">${product.Price}</span>
          <span className="card-stock">{product.stock}</span>
        </div>
        <div className="card-actions">
          <button className="card-button">Buy now</button>
          <button className="card-button">Add to bag</button>
        </div>
        <button className="card-like-button" aria-label="Like">
          <svg width="20" height="20" fill="currentColor" aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Card;
