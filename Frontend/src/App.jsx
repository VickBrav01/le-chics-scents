import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./pages/Home.css";
import Shop from "./pages/Shop";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import ProductCategories from "./components/ProductCategories";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/featured_products" element={<FeaturedProducts />} />
        <Route path="/product_categories" element={<ProductCategories />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
