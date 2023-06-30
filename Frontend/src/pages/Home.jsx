import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="content1">
        <div className="content-head">
          <h1>Welcome to Our Jewelry Store</h1>
        </div>
        <div className="content-body">
          <p>
            At our jewelry store, we offer a wide range of exquisite jewelry
            pieces that are meticulously crafted to perfection. Whether you're
            looking for a stunning necklace, elegant earrings, or a dazzling
            ring, we have the perfect piece to complement your style and make a
            statement.
          </p>
          <p>
            Our collection features a variety of materials, including gold,
            silver, diamonds, and precious gemstones. Each piece is designed
            with attention to detail and reflects our commitment to quality and
            craftsmanship.
          </p>
          <p>
            With our extensive selection and exceptional customer service, we
            strive to provide a seamless and enjoyable shopping experience.
            Explore our collection online or visit our store to discover the
            perfect jewelry piece that reflects your unique personality and
            celebrates your special moments.
          </p>
        </div>
        <div className="content-buttons">
          <button className="btn" onClick={() => navigate("/login")}>
            Shop Now
          </button>
        </div>
      </div>
      <div className="content2"></div>
    </div>
  );
}

export default Home;
