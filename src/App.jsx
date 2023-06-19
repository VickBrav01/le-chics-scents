import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Product" element={<Product />} />
      </Routes>

      <div>
        <FeaturedProducts />
      </div>
    </>
  );
}

export default App;
