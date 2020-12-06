import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Footer from "../components/Footer"
import {Input,FormBtn} from "../components/Form"
import Jumbotron from "../components/Jumbotron";


const Detail = () => {
  const [user, setUser] = useState({
    name: "",
    giftList: [],
  });
  const [formObject, setFormObject] = useState({})
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
  }, [params]);

  const handleInputChange=(event)=>{
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  const handleFormSubmit=(event)=>{
      event.preventDefault();
      var newArr = user.giftList
      newArr.push(formObject)
      setUser({...user, giftList: newArr})
      console.log(user)
      API.updateUser(user._id,user).then((res) =>{
        console.log(res)
      }).catch(err=>{throw err})
      
  };


  const heading = {
    fontSize: '50px',
    color: 'black'
  }
  
  


  return (
    <Container fluid>
      <Jumbotron>
      <h2 style={heading}> Add a Gift, {user.name}! </h2>
      </Jumbotron>
      <Row>
        <Col size="md-12">
        <form>
            <Input
                onChange={handleInputChange} 
                name="title"
                placeholder="Title"
            />
            <Input 
                onChange={handleInputChange}
                name="image"
                placeholder="Image"
            />
            <Input
                onChange={handleInputChange}
                name="link"
                placeholder="Link"
            />
            <FormBtn
                disabled={!(formObject.title && formObject.link)}
                onClick={handleFormSubmit}
              >
                  Add gift
              </FormBtn>
            
        </form>
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
};
export default Detail;
