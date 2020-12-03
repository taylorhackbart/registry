import React from 'react';
import './home.css';
import Reviews from "../components/Reviews/Index"
import Footer from "../components/Footer"




function Projects() {
    return (
        <>
        <a href="project"></a>
            <div className="container-fluid bg-3 text-center">
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
            <Reviews />
            <Footer/>
        </>
    )
};

export default Projects;