import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 450, clear: "both", paddingTop: 90, textAlign: "center", backgroundColor:"rgb(219, 214, 168)" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;

