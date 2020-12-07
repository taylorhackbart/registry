import React from "react";
import "./home.css";
import Reviews from "../components/Reviews/Index";
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
            <div className="card-home col-sm-3">
              <img src="https://m.media-amazon.com/images/I/71pN82bOmrL._AC_SY355_.jpg" className="card-img-top" alt="..."/>
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

            <div className="card-home col-sm-3">
              <img src="https://stylemotivation.com/wp-content/uploads/2020/02/elegant-vintage-inspired-outdoor-wedding-at-the-ridge-asheville-photography-anthology-38-700x1050-700x1050.jpg" className="card-img-top" alt="..." />
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

            <div className="card-home col-sm-3">
              <img src="https://i.pinimg.com/736x/3e/0f/59/3e0f591bda52af0f8c456606f9c98dba.jpg" className="card-img-top" alt="..." />
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
      <div>
      <Reviews />
      </div>
      <Footer />
  
    </>
   
  );
}

export default Home;
