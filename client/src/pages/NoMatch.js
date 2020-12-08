import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import "./nomatch.css"

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="not-found">404 Page Not Found</h1>
            {/* <h1>
              <div role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </div>
            </h1> */}
            <h3 className="showall-match" style={{fontSize: "30px"}}>The page or person you're looking for hasn't been created yet. Please check out our <a href="/showall" style={{fontFamily: "Cedarville Cursive", color:"grey"}}>Show All Registries Page </a> to see a list of all registries.</h3>
            <h4 className="create-match">Or, if you'd like to create a new registry, click <a href="/create" style={{fontFamily: "Cedarville Cursive", color:"grey"}}> here.</a></h4>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
