import React from "react";
import './index.css'
import Navigation from "./Components/Navbar/Navigation";
import Container from "./Components/Container/Container"

const  App = () => {

  return (
        <div className="app">
          <Navigation />
          <Container />
        </div>
  );
}

export default App;
