import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
  return (
    
    <BrowserRouter>
    <Nav />
    <div>
      <Route exact path ="/" component={Home}/>
    </div>
    </BrowserRouter>
  );
}

export default App;

