import React from "react";
import Container from "./Components/Container/Container";
import Navbar from "./Components/Navbar/Navbar";
import useWindowSize from "./Components/utils/WindowSize";

const  App = () => {
   const { width } = useWindowSize();

  return (
    <div className="app">
    {
      width > 500 && (
        <>  
          <Navbar/>
          <Container />
        </>
    )
    }
    </div>
  );
}

export default App;
