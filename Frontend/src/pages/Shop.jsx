import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Shop.css"; // Import your custom CSS for styling

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/Products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="shop-container">
      <h1>Shop</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.ProductId}>
            <img
              className="product-image"
              src={product.ImageUrl}
              alt={product.ProductName}
            />
            <div className="product-details">
              <h3 className="product-name">{product.ProductName}</h3>
              <p className="product-description">{product.Description}</p>
              <p className="product-price">Price: ${product.Price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
