import React from "react";
import "./home.css";
import Reviews from "../components/Reviews/Index";
import Footer from "../components/Footer";

function Home() {
  return (
    <>

      <div className="container-fluid">
        <div className="bg-3 text-center">
          <h3 className="margin"> </h3>
          <br />
          <div className="row">
            <div className="card col-sm-4">
              <img className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Card title</h5>
                </a>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <div className="card col-sm-4">
              <img className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Card title</h5>
                </a>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <Reviews />
        <Footer />
    </>
  );
}

export default Home;
