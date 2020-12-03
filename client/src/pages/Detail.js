import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Gift from "../components/Gift";

const Detail = () => {
  const [users, setUsers] = useState({});
  const [user, setUser] = useState ({
    name: "",
    giftList: []
  })
  const params = useParams();

  useEffect(() => {
    API.getUser(params.id)
      .then((res) => {
        
        setUser(res.data)
      console.log(res.data)
      }
     
      )
      // .catch((err) => console.log(err));
  }, [] );


  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <ListItem>{users.name}</ListItem>
          <Gift>
            <>
              <p key={users._id}>{users.title}</p>
              <p>{users.image}</p>
              <p>{users.link}</p>
            </>
          </Gift>
        </Col>
      </Row>
    </Container>
  );
};
export default Detail;
