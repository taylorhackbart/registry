import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer"


const Detail = () => {
  const [user, setUser] = useState({
    name: "",
    giftList: [],
  });
  const params = useParams();

  useEffect(() => {
    console.log(params)
    if(params.id){
      API.getUser(params.id).then((res) => {
        console.log(params.id)
        console.log(res.data)
        setUser(res.data)
      })
      .catch((err) => console.log(err));
    } else if (params.name){
      API.getUserByName(params.name).then((res) => {
        // console.log(params.name)
        // console.log(res.data[0])
        setUser(res.data[0])
      })
      .catch((err) => console.log(err));
    }
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <p>{user.name}</p>
        
            {user.giftList.map((gift) => (
              <List key={gift.title}>
                <ListItem>{gift.title}</ListItem>
                <ListItem > <img src ={gift.image} alt="gift" ></img></ListItem>
                <ListItem > <a href={gift.link} > Click to purchase </a></ListItem>
              </List>
            ))}
       
        </Col>
      </Row>
      <Footer />
    </Container>
  );
  <Footer/>
};
export default Detail;
