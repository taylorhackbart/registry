import React, {useState} from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowAll from "./pages/ShowAll";
import Create from "./pages/Create";
import Detail from "./pages/Detail"


function App() {
  const [searched, setSearched] = useState([])
  console.log("searched", searched)

  return (
    
    <BrowserRouter>
    <Nav setSearched={setSearched}/>
    <div>
      <Route exact path ="/" component={Home}/>
      <Route exact path ="/showall" component={ShowAll}/>
      <Route exact path = "/create" component={Create} />
      <Route exact path = "/showall/:id" component = {Detail} />
    </div>
    </BrowserRouter>

  );
}

export default App;

