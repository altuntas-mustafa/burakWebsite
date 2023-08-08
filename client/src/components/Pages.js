import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default Pages;
