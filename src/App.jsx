import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./pages/About";
import Products from "./pages/Products";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      
    </Routes>
  );
}