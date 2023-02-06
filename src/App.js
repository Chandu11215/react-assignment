import React from "react";
import './index.css'
import Container from "./Components/Container/Container";
import Navbar from "./Components/Navbar/Navbar";

const  App = () => {

  return (
    <div className="app">
      <Navbar/>
      <Container />
    </div>
  );
}

export default App;
