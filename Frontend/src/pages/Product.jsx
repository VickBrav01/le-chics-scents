import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Product() {
  return (
    <div className="product-page">
      <div className="product-section">
        <ul>
          <li>
            <Link to="/featured_products">Featured Products</Link>
          </li>
        </ul>
      </div>

      <div className="product-section">
        <ul>
          <li>
            <Link to="/product_categories">Product Categories</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
