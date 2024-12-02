// src/App.js
import React from "react";// Import Card component
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="">
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}


