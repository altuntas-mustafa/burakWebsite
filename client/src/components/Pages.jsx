import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./Contact";
import Home from "./Home";
import Products from "./Products";
import Footer from "./Footer";
import DrawerAppBar from "./DrawerAppBar";

const Pages = () => {
  return (
    <>
    <DrawerAppBar/>
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer/>
    </>

  );
};

export default Pages;
