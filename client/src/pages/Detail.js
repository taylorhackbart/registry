import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

const Detail = () => {
  const [users, setUser] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    API.getUser(params.id)
      .then((res) => setUser(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <List>
                <ListItem>{users.name}</ListItem>
                <List>
                  {users.giftList.map((gift) => (
                    <>
                      <ListItem>{gift.title}</ListItem>
                      <ListItem>{gift.image}</ListItem>
                      <ListItem>{gift.link}</ListItem>
                    </>
                  ))}
                </List>
            
          </List>
        </Col>
      </Row>
    </Container>
  );
};
export default Detail;
