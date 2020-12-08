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
                  The Holidays are coming! This helpful registry is perfect for family/friends/co-workers gift ideas. Make your list and check it twice!
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
                  This Wedding wishlist offers everything you need for a smart, waste-free wedding regristy. This is your one stop shop to find classic and unique collection of wedding decor. 
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
                  Happy Birthday Wishlist designed for your friends and family! Don't forget to include custom pet socks, sorting hat bath bombs, and other goodies that will bring a smile to your friends faces. 
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
