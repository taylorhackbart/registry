import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route } from "react-router-dom";
import Books from "./pages/Books";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path ="/" component={Books}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
