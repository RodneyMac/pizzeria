import React from "react";
import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Pizzas from "./views/Pizzas/Pizzas";
import Empanadas from "./views/Empanadas/Empanadas";
import Bebidas from "./views/Bebidas/Bebidas";
import Postres from "./views/Postres/Postres";
import Checkout from "./views/Checkout/Checkout";
import Categories from "./components/Categories/Categories";

function App() {
  return (
    <div>
      <Navbar/>
      <Categories/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pizzas" element={<Pizzas/>}/>
        <Route path="/empanadas" element={<Empanadas/>}/>
        <Route path="/bebidas" element={<Bebidas/>}/>
        <Route path="/postres" element={<Postres/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </div>
  );
}

export default App;
