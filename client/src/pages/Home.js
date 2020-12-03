import React from 'react';
import './home.css';
import Reviews from "../components/Reviews/Index"



function Projects() {
    return (
  <>
  <a href="container-fluid">
   <div className="bg-3 text-center">
     <h3 className="margin"></h3><br />
         <div className="row">
             <div className="col-sm-4 ">
                <h1>Holiday</h1>
              </div>
              <div className="col-sm-4 ">
                 <h1>Holiday</h1>
               </div>
                <div className="col-sm-4 ">
                  <h1>Holiday</h1>
                </div>
              </div>
          </div>
        </a>

        <Reviews />
   </>
        
    )
};

export default Projects;