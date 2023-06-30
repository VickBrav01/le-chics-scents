import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCategories.css";

function ProductCategories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleCategoryClick = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:3000/categories/${id}/products`
      );
      setProducts(response.data);
      console.log(response.data);
      setSelectedCategory(id);
    } catch (error) {
      console.error("Error fetching products for category:", error);
    }
  };

  return (
    <div className="product-categories">
      <h2 className="categories-heading">Product Categories</h2>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category.CategoryId}
            onClick={() => handleCategoryClick(category.CategoryId)}
            className={
              selectedCategory === category.CategoryId ? "selected" : ""
            }
          >
            {category.CategoryName}
          </li>
        ))}
      </ul>

      {selectedCategory && (
        <div className="selected-category">
          <h3 className="selected-category-heading">
            Products in Selected Category
          </h3>
          <div className="card-list">
            {products.map((product) => (
              <div key={product.id} className="card">
                <img
                  src={product.image}
                  alt={product.ProductName}
                  className="card-image"
                />
                <div className="card-body">
                  <h4 className="card-title">{product.ProductName}</h4>
                  <span className="card-category">
                    Category: {product.CategoryName}
                  </span>
                  <p className="card-description">{product.Description}</p>
                  <span className="card-price">${product.Price}</span>
                  <button className="card-button">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCategories;
