import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div
      className={`w-full h-screen relative bg-cover bg-center bg-[url('./assets/Bg.jpg')] `}
    >
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>}  />

        <Route path="/login" element={<Login/>}  />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
