import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
function App() {
  return (
    <div
      className={`w-full h-screen relative bg-cover bg-center bg-[url('./assets/Bg.jpg')] `}
    >
      <Navbar />
      <Card />
    </div>
  );
}

export default App;
