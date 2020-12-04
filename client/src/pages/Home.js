import React from "react";
import "./home.css";
// import Reviews from "../components/Reviews/Index";
import Footer from "../components/Footer";
// import ReviewsForm from "../components/ReviewsForm/form"


function Home() {
  return (
    <>


      <div className="container-fluid">
        <div className="text-center">
          <h3 className="margin"> </h3>
          <br />
          <div className="row">
            <div className="card col-sm-4">
              <img src="https://25.media.tumblr.com/tumblr_mefpzkyRoj1rn0vh6o1_400.gif" className="card-img-top" alt="..."/>
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Holidays</h5>
                </a>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-sm-4">
              <img src="https://media-api.xogrp.com/images/0c2aeb10-136f-4ac9-a2fb-83d862315f34~rs_768.h" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Weddings</h5>
                </a>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>

            <div className="card col-sm-4">
              <img src="https://www.lolgifs.net/wp-content/uploads/2019/02/funny-birthday-gif.gif" className="card-img-top" alt="..." />
              <div className="card-body">
                <a href="/create" className="stretched-link">
                  <h5 className="card-title">Birthdays</h5>
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
      {/* <Reviews /> */}
      {/* <ReviewsForm /> */}
      <Footer />
    </>
  );
}

export default Home;
