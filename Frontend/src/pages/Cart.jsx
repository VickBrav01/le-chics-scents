import React, { useState, useEffect } from "react";
import axios from "axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Load cart items from the backend on component mount
  useEffect(() => {
    fetchCartItems();
  }, []);

  // Fetch cart items from the backend
  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://example.com/api/cart");
      setCartItems(response.data);
    } catch (error) {
      console.log("Error fetching cart items:", error);
    }
  };

  const addToCart = (product) => {
    // Add the product to the backend cart
    axios
      .post("http://example.com/api/cart", product)
      .then(() => {
        // If successful, update the cart items in the state
        setCartItems([...cartItems, product]);
      })
      .catch((error) => {
        console.log("Error adding to cart:", error);
      });
  };

  const removeItem = (item) => {
    // Remove the item from the backend cart
    axios
      .delete(`http://example.com/api/cart/${item.id}`)
      .then(() => {
        // If successful, update the cart items in the state
        const updatedItems = cartItems.filter(
          (product) => product.id !== item.id
        );
        setCartItems(updatedItems);
      })
      .catch((error) => {
        console.log("Error removing item from cart:", error);
      });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <button onClick={() => removeItem(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => addToCart({ id: 1, name: "Product 1" })}>
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
