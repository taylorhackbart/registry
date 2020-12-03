import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowAll from "./pages/ShowAll";
import Create from "./pages/Create"


function App() {
  return (
    
    <BrowserRouter>
    <Nav />
    <div>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/showall" component={ShowAll}/>
      <Route exact path = "/create" component={Create} />
      
    </div>
    </BrowserRouter>

  );
}

export default App;

