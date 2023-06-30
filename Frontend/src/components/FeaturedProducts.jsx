// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:3000/Products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="featured-products">
//       {}
//       <h1>Featured Products</h1>
//       <div className="product-list">
//         {products.map((product) => (

//         ))}
//       </div>
//     </div>
//   );
// }

// export default FeaturedProducts;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/Products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="featured-products">
      <h1 className="featured-products-heading">Featured Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-details">
              <h2 className="product-name">{product.ProductName}</h2>
              <p className="product-description">{product.Description}</p>
              <span className="product-price">${product.Price}</span>
              <div className="product-buttons">
                <button className="buy-button">Buy Now</button>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;
