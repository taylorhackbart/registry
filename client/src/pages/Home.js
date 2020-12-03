import React from 'react';
import './home.css';
import Reviews from "../components/Reviews/Index"
import { Card, Button } from 'react-bootstrap';




function Projects() {
    return (
    <div className="Projects">
      <header className="Project-header">
        <Card className= "mb-3" style={{ color: "#000"}} >
      <Card.Img src="https://picsum.photos/300/200" />
      <Card.Body>
        <Card.Title>
          Card example
        </Card.Title>
        <Card.Text>
          This is an example of react bootstrap cards
        </Card.Text>
        <Button variant="primary">Read more</Button>
      </Card.Body>
    </Card>

        <Reviews />
    </header>
</div>
        /* <a href="project"></a>
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
            </div> */
        
    )
};

export default Projects;