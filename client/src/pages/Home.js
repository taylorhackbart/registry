import React from "react";
import "./home.css";
import Reviews from "../components/Reviews/Index";
// import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="text-center">
          <h3 className="margin"> </h3>
          <br />
          <div className="row card-row">
            <div className="card-home col-sm-3">
              <img
                src="https://m.media-amazon.com/images/I/71pN82bOmrL._AC_SY355_.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Holidays</h5>
                </a>
                <p className="card-text">
                  Create a registry to share with friends and family. Make gift giving over the holidays easy.
                </p>
              </div>
            </div>

            <div className="card-home col-sm-3">
              <img
                src="https://media-api.xogrp.com/images/b3beff64-a3ca-4286-b6af-7cb2011b212c~rs_768.h"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Weddings</h5>
                </a>
                <p className="card-text">
                  Tying the knot? Start your new life together with gifts for both of you.
                </p>
              </div>
            </div>

            <div className="card-home col-sm-3">
              <img
                src="https://i.etsystatic.com/9357868/r/il/ff61e5/2095229691/il_794xN.2095229691_2vzo.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Birthdays</h5>
                </a>
                <p className="card-text">
                  Turning one, or turning one-hundred, gifts never get old.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-class">
        <Reviews />
      </div>
    </>
  );
}

export default Home;
