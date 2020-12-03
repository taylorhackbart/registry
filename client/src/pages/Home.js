import React from 'react';
import './home.css';
import Reviews from "../components/Reviews/Index"



function Projects() {
    return (
  <>
  <a href="/create" className="container-fluid">
   <div className="bg-3 text-center">
     <h3 className="margin"></h3><br />
         <div className="row">

    <div className="card col-sm-4">
     <img className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
      </div>
    </div>

  <div className="card col-sm-4" style={'width: 18rem;'}>
     <img className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
  </div>

  <div className="card col-sm-4">
     <img className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      
    </div>
  </div>
        
              </div>
          </div>
        </a>

        <Reviews />
   </>
        
    )
};

export default Projects;