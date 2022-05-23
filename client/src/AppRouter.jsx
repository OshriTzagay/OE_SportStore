import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/pages/HomeCompo/Home";
import Shirts from "./Components/pages/ShirtsCompo/Shirts";
import Shoes from "./Components/pages/ShoesCompo/Shoes";
import ShoppingCart from "./Components/pages/ShoppingCartCompo/ShoppingCart";
import Footer from "./Components/parts/FooterCompo/Footer";
import Navbar from "./Components/parts/NavBar-Compo/Navbar";
export default function AppRouter() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/shirts" element={<Shirts />}></Route>
        <Route exact path="/shoes" element={<Shoes />}></Route>
        <Route exact path="/cart" element={<ShoppingCart />}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
